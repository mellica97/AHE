# Add a new school
1. Make sure that [blackbriar-everyday](https://gitlab.com/blackbriar/blackbriar-everyday) is cloned locally to your machine
    1. How to clone a gitlab repository: [LINK](https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html#clone-a-repository)
2. azdegreeplans.com is hosted on AWS Route53. Route53 is a Domain Name Service (DNS). There are a number of different DNS record types listed in the azdegreeplans.com hosted zone, but the one we are concerned with is the A record.
    1. [DNS Record Types](https://ns1.com/resources/dns-types-records-servers-and-queries)
3. To download the entire azdegreeplans.com bucket you can use the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html), specifically to [download an S3 folder](https://docs.aws.amazon.com/cli/latest/reference/s3/cp.html#examples). You will use the AWS CLI to sync the changes made as well.
4. Source code is also hosted at https://gitlab.com/blackbriar/azdegreeplans.com
5. Make sure the degree roadmaps service is enabled for the new college that we want to add. For example here is the link for central arizona college:
https://admin.arizonadegreeplans.com/universities/central-arizona-college
6. After the roadmaps are enabled we need to upload a [university_layouts file](http://docs.damoursystems.com/providing_data/university_layout_data.html) at least in order to see some results. We should also upload the [courses](http://docs.damoursystems.com/providing_data/curriculum_data.html) at this time too.
7. At least one plan must be entered in order to render the new website at this point.
8. Once at least one plan has been entered you must hit the “Publish” button on the home page.
9. Now that it has been published it will appear in the bb-arizona-assets/json/universities.json file which indicates that it should be built.
10. We now have to build the static site on our local machine before we can deploy it. That’s why we needed to clone blackbriar-everyday.
    1. There are instructions in the [README](https://gitlab.com/blackbriar/blackbriar-everyday) file how to do the build.
    2. First make sure your creds.json are filled out
    3. You can use `UNIVERSITY_ID='central-arizona-college' node build/build.js` to build a single school. central-arizona-college can be replaced with any valid school slug.
    4. Then you want to upload what you’ve built. The built files will be put in the dist/ folder inside of blackbriar-everyday/ folder. All files in the dist/ folder are uploaded. Delete any subfolders that you don’t want uploaded. Each subfolder will be one school.
11. After uploading to S3 we can check if it was successful by looking in the bb-everyday S3 bucket. Now we need to create a CloudFront distribution. There are directions for that also in the README.
12. Going back to AWS Route53, if we check the other subdomains that were already set up we see that they point to CloudFront URLs. Create a new A record in Route53 and check that it is an alias record. Select cloudfront distribution and then the correct distribution. Hit create record.
13. Add the cloudfront domain (origin) to the allowed list in https://s3.console.aws.amazon.com/s3/buckets/bb-everyday?region=us-west-2&tab=permissions

# Rename concentration to emphesis

This is a setting in the `college.json` file that Jiacheng developed.

```json
{
    "concentrationName": "concentration",
    "collegeView": false,
    "programNaming": "Program",
    "showCollege": false
}
```

After setting this you can re-build and re-deploy the blackbriar-everyday deployment for an individual school like so:

```bash
UNIVERSITY_ID='maricopa-community-college' node build/build.js
UNIVERSITY_ID='maricopa-community-college' node deploy.js
```

# Log Rotation

Add the following to a logrotation.conf to set up log rotation (unix machine)

/var/app/blackbriar/log/production.log {
    daily
    missingok
    rotate 7
    compress
    delaycompress
    notifempty
    create 0640 webuser webuser
}


# Completely Removing & Replacing Uploaded university_layouts.csv

If a university has uploaded a university_layouts.csv file that needs to be fully replaced, it can be done by taking the below steps. One reason this may need to be done is if there are duplicate programs or majors.

Please note that the steps below will delete **ALL** Entities for **EVERY** academic period, including the UniversityLayouts and UniversityPeriodJoins for that school. It appears that all courses at the institution will also be deleted. This may be avoidable, but would need to be tested or consult Kevin/Wisam/etc.

It may be possible to also filter down to a specific academic period. Example:

## Delete all Entities at the University Level

The order may not matter, but this order makes the most sense:

Concentration &rightarrow; Program  &rightarrow; Major  &rightarrow; Department  &rightarrow; College Division  &rightarrow; College

This can be achieved by running the following commands:

```ruby
Concentration.where(university: University.friendly.find('university-slug')).destroy_all
Program.where(university: University.friendly.find('university-slug')).destroy_all
Major.where(university: University.friendly.find('university-slug')).destroy_all
Department.where(university: University.friendly.find('university-slug')).destroy_all
CollegeDivision.where(university: University.friendly.find('university-slug')).destroy_all
College.where(university: University.friendly.find('university-slug')).destroy_all
```

**Delete the UniversityLayouts**

`UniversityLayout.where(university: University.friendly.find('university-slug')).destroy_all`

**Delete the UniversityPeriodJoins**

`UniversityPeriodJoin.where(university: University.friendly.find('university-slug')).destroy_all`

**Single academic Period for UKY Example**

```ruby
uky = University.find(4664)
uky.university_period_joins.where(academic_period_id: 100).destroy_all
```

# Wipe Student Data
The following commands will clear all of the data associated with the analytics sankey flows for a particular school. Note, this will clear data across all academic periods.

### Clear awarded_degrees.csv
`AwardedDegree.where(university_layout: UniversityLayout.where(university: University.friendly.find('university-slug'))).destroy_all`
### Clear terms.csv
`Term.where(student: Student.where(university: University.friendly.find('university-slug'))).destroy_all`
### Clear students.csv
`Student.where(university: University.friendly.find('university-slug')).destroy_all`

### Notes
This does not clear the university_layouts.csv for the institution, which is covered in [replacing university_layouts.md](./Replace%20university_layouts.md)

Assuming you are in the `blackbriar` directory and logged in as `webuser`, this can be executed as a script via `rails runner -e production lib/scripts/WipeUniversityStudentData.rb "university-slug"` 
