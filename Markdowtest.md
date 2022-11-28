# BlakBriar, A Platform for Student Success
# Table of Contents
[***Background***](#Background)

[***Security Overview***](#Security)

[***Public Subnets***](#Public)

[***Semi-Public Subnet (ips/ids)***](#Semi-Public)

[***Private Subnets***](#Private)

[***Instantiation of Instances***](#Instantiation)

[***Advanced Administration (Including Quick Start)***](#Advanced)

[***Understanding the app models***](#_Understanding)

[***User Entered Data Models***](#User)

[***Approximate Cost***](#Approximate)

[***Appendix***](#Appendix)

## Background
Curricular Analytics (aka Blackbrair) is a tool which combines the latest in student success research in an easy to use software application. We specialize in providing these software applications within a state-of-the-art software platform from which institutions can upload the curricula specific to them with ends to improve student success at their institution.  

Significant work has been undertaken to develop a visualization platform and software interface for institutions to import and analyze their curricula. The platform includes 5 custom repositories:
1. **Main Infrastructure** (<https://gitlab.com/unm-idi/blackbriar>) 
1. **Admin** (<https://gitlab.com/unm-idi/blackbriar-admin>) 
1. **Analytics** (<https://gitlab.com/unm-idi/blackbriar-analytics>) 
1. **Authentication** (<https://gitlab.com/damour/CASino>)
1. **Podium** (<https://gitlab.com/unm-idi/blackbriar-podium>)

While these tools have been developed on their own, for the complete customer facing solution to be implemented, all must be managed, supported, and documented on an AWS backend infrastructure. 

Functionality in the current analytics platform includes:

1. Degrees
   1. A centralized location where students/parents/administrators can easily visualize programs and the required courses necessary to complete said degree. 
1. Admin
   1. Portal where the degree plans can be maintained, added to, or edited. Year over year changes can be easily modified by copying the prior years degrees and changing only what is needed. 
1. Student Analytics
   1. Analytics platform in the form of a “Minard Map” (time sensitive flow chart) depicting student progression in the form of cohorts term over term. Depicts stop out relative to successful graduation, identifying points of complication.  
1. API
   1. Administrative platform from which data can be uploaded and analyzed.

## Security Overview 

The blackbrair infrastructure must be understood before attempting to deploy and use the service. This user guide is an attempt to simply this deployment and assist in backend administration. 

The service has been deployed using amazon web services (AWS). The applications live in 5 dedicated compute instances (detailed in Instances Section) which live in dedicated subnets with secure inbound and outbound rules (depending on the application). These serve as the hub where the service’s data models reside and designate appropriate action based off the user’s inputs.

Security of input data is of the utmost importance. In order to prevent dictionary attacks, an advanced authentication platform known as CAS has been deployed. Also to prevent sensitive data from becoming public facing, an internal ips/ids network has been deployed.    

1. VPC (Virtual Private Cloud)

Blackbrair requires the instantiation of a virtual private cloud (VPC) in order to control access to certain parts of the service. The VPC will allocate a particular section of the aws server particularly for the blackbrair application.  

Access control lists, or ACLs are first created. Public facing users such as students do not need the same level of capabilities as the administrator. In order to distinguish these different groupings (in essence the different read/write access) we will limit control to certain parts of the infrastructure. In each ACL there is an associated security group, giving the policy of inbound and outbound traffic. This creates the concept of a “subnet”, or a partition of the VPC that can only communicate and link into inward or outward facing protocols:

![image](https://www.linkpicture.com/q/VPC-relationship_1.png)
Figure 1: Example showing the EC2/Subnet/VPC Relationship

In our infrastructure there is there is one VPC that hosts 6 subnets. There are two availability zones, with 3 subnets in each AZ.

## Public Subnets (2x) 
Access to the internet via internet gateway 
Has own ACL, Security group, and load balancer:

STEP 1: Create Subnet Traffic Rules By creating Access Control List – Public Facing Inbound Rules

![image](https://www.linkpicture.com/q/image2_1.png)
![image](https://www.linkpicture.com/q/image3_1.png)

Step 2: Create Route Table Specific to the Public Subnets

Route Table
![image](https://www.linkpicture.com/q/image4_7.png)

Step 2b- Create Internet Gateway within the public facing route table (shown in red box above)

![image](https://www.linkpicture.com/q/image5_3.png)

The security group allows all incoming SSH, HTTP, HTTPS and allows all outbound traffic.

The network ACL allows all inbound traffic. It allows outbound HTTP/HTTPS to the load balancers, but all other outbound traffic is denied.

OVERVIEW:
![image](https://www.linkpicture.com/q/image6_3.png)

## Semi-Public Subnet (ips/ids)  
(2x)

STEP 1: Create Subnet Traffic Rules By creating Access Control List

Inbound
![image](https://www.linkpicture.com/q/image7_5.png)

Outbound
![image](https://www.linkpicture.com/q/image8_3.png)

Step 2+2b: Create Route Table Specific to the ips/ids Subnets (same as in public subnets)
Route Table
![image](https://www.linkpicture.com/q/image9_4.png)

OVERVIEW:
![image](https://www.linkpicture.com/q/image10_3.png)

Second layer public subnet is limited in that HTTP/HTTPS can only be received from the first public subnet.

All SSH connections are allowed. You may SSH into these machines directly.

TCP is open on port 4118 to all traffic. This allows TrendMicro Deep Security to monitor the instances.

All traffic from the private subnets is allowed (the subnets that contain the databases)

Has access to the internet via internet gateway (Step 2b)
## Private Subnets
(2x)

STEP 1: Create Subnet Traffic Rules By creating Access Control List

Inbound:
![image](https://www.linkpicture.com/q/image11.png)

Outbound:
![image](https://www.linkpicture.com/q/image12.png)

Step 2: Create Route Table Specific to the Private Subnets (Notice no access to internet) 
Route Table
![image](https://www.linkpicture.com/q/image13.png)

Only allows PostgreSQL traffic in, and only from the Public-Limited Subnet.

Allows all traffic out, but only to the Public-Limited Subnet. All other traffic is denied.

## Instantiation of Instances  

2. Standing up of Instances – Choosing the correct instance type 

When booting up the instance, you will be promoted by amazon to choose the Amazon Machine Image you would like. For security we choose TrendMicro:

![image](https://www.linkpicture.com/q/image14_1.png)

The minimum size instance you can select for this instance type is m5.large.  

A total of 5 should be created 

TrendMicro provides their Deep Security as an AMI. IDI has setup a pre-configured AMI that comes set up with the necessary software to run the Blackbrair applications already installed (Ruby, Nginx, etc)


SSH Forwarder  
An EC2 instance that you must SSH into in order to access the instances of the other applications (Everyday, Podium, Admin)

All instances have a security group network rule that prevents SSH from anything except the forwarder instance  
To access the SSH Forwarder you must use an SSH Key

EC2s Described:  
Each of these applications run independently but depend on one another, and each have own repository (please see *Background* section) 


1. BlackBriar-Everyday 

End User: front end that users access  
Example: http://wau.degrees.damoursystems.com/  
Written in just Vue.js front end  
Hosted as static S3 website  
![image](https://www.linkpicture.com/q/image15_1.png)
S3 Buckets  
UNIVERSITY-ASSETS  
Stores logos and colors.  

When you publish a curriculum to blackbriar-everyday a large JSON is generated that stores all the data for the entire curriculum of the school. This file is stored in this bucket.  

For example: the CSS files for the logo/colors.  
The site is hosted from S3 as a static website.  
A URL is generated through a CloudFront formation to provide access to this static website. This allows the school to provide access to the website as a part of their website.

\*\*Put in uky slug as example\*\*

2. BlackBriar-Podium 

End users- data entry team, used for editing degrees   
Written in Ruby with a Vue.js front end  

3. BlackBriar-Admin

End User: Administrators, data entry team   
The application responsible for the admin dashboard  
Allows admins to do a number of things:  
Seed in data  
Upload course files  
Upload info for student analytics diagrams  
Manage users for podium  
Upload logos  
Set university colors  
Written in Ruby with a Vue.js front end  

5. CASino

End user: Everyone accessing the platform through Blackbriar-Admin.  
Day to day users: Will not need modified once stood up.  
Forks into the CASino application for user authentication  
This app is able to read & write to the admin (auth) database  
This app can only WRITE to the university data s3 bucket (rpsp-data)  

Validates user logins  
Enforces user roles  
Admins can create users with different roles/permissions (through BlackBriar-Admin)   
Runs on its own EC2 Instance separate of BlackBriar-Admin  

*\*\*Potentially phased out soon due to compatibility issues\*\**

1. BlackBriar Main (Database Interface App)

The application to interface with the main database  
Provides CRUD functionality  
Written in just Ruby (There is no GUI)  
This app can only READ from the university data bucket  

Databases (2x)  
Choose postgres9.6 as instance.   
BlackBriar-Admin –> Contains user logins and user roles  
BlackBriar (Master) –> Stores the actual curriculum files as well as student information  

This deployment is more expensive because it has a specific security system, uses Docker.  
Uses three m4.large for security compliance.

Configuration:

![image](https://www.linkpicture.com/q/image16.png)

Tie into VPC:

![image](https://www.linkpicture.com/q/image17_1.png)
\*\* Notice connections into each one of the subnets, along with the allocation within the appropriate msi-private (no internet connection) security group described. 

S3 Buckets  
UNIVERSITY-ASSETS  
Stores logos and colors.  
When you publish a curriclum to blackbriar-everyday a large JSON is generated that stores all the data for the entire curriclum of the school. This file is stored in this bucket.  
RPSP-DATA  
Stores all of the individual degree plans.  

RPSP-BLACKBRIAR-EVERYDAY  
There is a task in the blackbriar-everyday application that builds static files files neccessary for the university website.  
For example: the CSS files for the logo/colors.  
The site is hosted from S3 as a static website.  
A URL is generated through a CloudFront formation to provide access to this static website. This allows the school to provide access to the website as a part of their website.  
For example a school could do something like www.uky.edu/curriculum rather than having to use http://uky.degrees.damoursystems.com/

## Advanced Administration (Including Quick Start)

Administration through terminal 

Overview of Server

Each instance must be connected to the server, PUMA mounted on nginx. This is done by the following:

To start please follow these commands:  

In the terminal, SSH into your instance by the following command
![image](https://www.linkpicture.com/q/image18_2.png)

\*Please note, your IP address will be different and must be found in your AWS console corresponding to the instance you are trying to access. Your pem file will. Also be different and correspond to the secret file you created upon the starting of the instance.

Switch to Webuser  
![image](https://www.linkpicture.com/q/image19_2.png)

Get into appropriate application
![image20.png](https://i.postimg.cc/VLJFtVrP/image20.png)

Get into the Ruby application
![image21.png](https://i.postimg.cc/pr4zkPhb/image21.png)

To start puma on any instance that requires it, run the following command as webuser in the root directory of the application (ex: /var/blackbriar-admin/)

`RAILS_ENV=production puma -C config/puma.rb -d`

This requires that puma (https://github.com/puma/puma) be installed. It is not required and installed by default, upon first time set up you must run `gem install puma` in the same root directory of the app. (edited)

The CASino instance requires that unicorn is running, which is launched via this command: `unicorn -c config/unicorn.rb -D` run in the root dir of the app

To make a user an admin you must add the damour\_admin role to them. To do this, go into the rails console using `RAILS_ENV=production rails -c` and then entering


\```u = User.find\_by("email": "example@email.com");  
u.add\_role(:university\_admin, university.find("university-of-kentucky").slugged\_university)```

When updating from one term/year to the next, upload all of the new files (university\_layouts and courses) and then when you select the new term in podium, keep all courses and units selected and copy them. Then any changes that need to be made can be done manually. So any requisites that have changed, any new degrees, etc are what would be done manually.

change school picture at /var/app/blackbriar-admin/app/javascript/university/images

`RAILS_ENV=production rake assets:precompile` (edited)

^recompile images after chaging school logo. must do on admin and podium (in general, for all asset changes that require a recompile)

```RAILS_ENV=production puma -C config/puma.rb -d```

Run on the admin instance, as webuser, to restart puma (runs the rails server for the admin app)

```unicorn -c config/unicorn.rb -D```

Run on the CAS instance, as webuser, gets cas running again

```u = User.find_by("email": "example@email.com");```  
```u.add_role(:university_admin, university.find("university-of-kentucky").slugged_university)```

Common maintenance commands

To start: 

In the terminal, SSH into your instance by the following command
![image](https://www.linkpicture.com/q/image18_2.png)

\*Please note, your IP address will be different and must be found in your AWS console corresponding to the instance you are trying to access. Your pem file will. Also be different and correspond to the secret file you created upon the starting of the instance.

Switch to Webuser  
![image](https://www.linkpicture.com/q/image19_2.png)

Get into appropriate application
![image20.png](https://i.postimg.cc/VLJFtVrP/image20.png)

Get into the Ruby application
![image21.png](https://i.postimg.cc/pr4zkPhb/image21.png)

To Restart nginx:
![image23.png](https://i.postimg.cc/JzMYXWXY/image23.png)

To Create a New University (Slug included)

Step 1:   
![image24.png](https://i.postimg.cc/c4SGF2Yw/image24.png)

Step 2:  
![image25.png](https://i.postimg.cc/XJfQqHJ6/image25.png)

Step 3:  
![image26.png](https://i.postimg.cc/mrxY9YKL/image26.png)

Step 4:   
![image27.png](https://i.postimg.cc/gkn8BtWc/image27.png)

Step 5:  
![image28.png](https://i.postimg.cc/ydL3LcpS/image28.png)

Step 6:  
![image26.png](https://i.postimg.cc/mrxY9YKL/image26.png)

\*\*MUST BE DONE IN ADMIN\*\*

To create new user  
\```u = User.find\_by("email": "example@email.com");  
u.add\_role(:damour\_admin);```

To add a user to a specific university, the process is similar.   
Instead of adding the damour\_admin role, add the university\_admin role followed by the university that you'd like the user to be an admin of.  
In the following example, the user is made an admin at the University of Kentucky.

\```u = User.find\_by("email": "example@email.com");  
u.add\_role(:university\_admin, university.find("university-of-kentucky").slugged\_university)```

To Assign new role for an existing user:
![image29.png](https://i.postimg.cc/4xv6z7Gp/image29.png)

To Assign new role to a particular university for an existing user:  
![image30.png](https://i.postimg.cc/G2TJTMmm/image30.png)

To delete data from particular day (in rails module):  
univ.where(created\_at: Date.parse("2019-02-20").all\_day).destroy\_all
## Understanding the app models:

![image31.png](https://i.postimg.cc/d3ch5FGg/image31.png)

university:   
Basic information every university has:
![image32.png](https://i.postimg.cc/1tvmbNVx/image32.png)
Every University has the following attributes once data is loaded in the frontend by the user:

![image33.png](https://i.postimg.cc/mgx0TN9Y/image33.png)

These will be described in detail in the model and data type sections

It order to edit data entered into the system it is critical to understand the models under app (/var/app/blackbrair/app/models)

## User Entered Data Models 

University Layout 

- **college\_name** - Name for each institutional college.
- **college\_code** - Code for each institutional college.
- **program\_name** - Name for each institutional program.
- **program\_code** - Code for each institutional program.
- **cip\_code** - The classification of instructional programs (CIP) code that is tied to this **major**.
- **academic\_period** 

Courses 

- **college\_code** - The code of the college that the course belongs to
- **course\_code** - The course code, often corresponding to a department code, but not necessarily. Something like "MATH" or "BIOL".
- **course\_number** - The course number. Something like "162" or "321L".
- **course\_title** - The full name of the course without abbreviations.
- **credits\_min** - The minimum number of credit hours associated with the course. If the course is offered for variable credits, separate the minimum and maximum credits and list the minimum bound on this column.
- **credits\_max** - The maximum number of credit hours associated with the course. If the course is offered for variable credits, separate the minimum and maximum credits and list the maximum bound on this column.
- **description** - The full description of the course.
- **academic\_period** - The academic period that this course was available. If it is available for multiple periods, list them each as a different row in this file. One of "Winter yyyy", "Spring yyyy", "Summer yyyy", "Fall yyyy". Where "yyyy" is the 4 digit year format. Additionally, if a course is available for all terms in a year it is important to list them for each term in that year e.g. "Winter 2016", "Spring 2016", "Summer 2016", "Fall 2016".

Students

- **id** - Numeric identifier that will be used to join this student to their terms and awarded degrees.
- **status** - Student entry status indicator. One of:
  - FTFT - First-time full-time student.
  - FT - First-time only student.
  - FTGRAD - First-time graduate student.
  - TRANSFER - Transfer student.
  - OTHER - Other status.
- **ethnicity** - Student ethnicity indicator. One of Hispanic, American Indian or Alaska Native, Asian, Black or African American, Native Hawaiian or Other Pacific Islander, White, Two or more races, Race/ethnicity unknown, Nonresident alien.
- **gender** - Student gender indicator. One of M, F, UNKNOWN, OTHER.
- **entry\_academic\_period** - Academic period of initial enrollment for this student. One of Winter yyyy, Spring yyyy, Summer yyyy, Fall yyyy. Where yyyy is the 4 digit year format.

Terms

- **id** - Student ID provided by the institution.
- **program\_code** - The program code that corresponds to the current enrollment for this term (e.g. BIOL-BS, ENGL-BA). This paired with the **academic\_period** will be used to link a [term](http://docs.damoursystems.com/providing_data/terms.md) to a [university_layout](http://docs.damoursystems.com/providing_data/university_layouts.md). If the student is denoted as UNDECIDED or NONDEGREE for this term then the **program\_code** should be left blank.
- **status** - Term program status indicator. One of:
  - INTENDED - Used if a student is intending to graduated within a program but has not yet been accepted to that program.
  - ACCEPTED - Used if a student has been accepted to the program they intend to graduate in.
  - UNDECIDED - Used if a student has no intended degree program.
  - NONDEGREE - Used if a student is not pursuing a degree.
- **academic\_period** - This term's enrollment period. One of "Winter yyyy", "Spring yyyy", "Summer yyyy", "Fall yyyy". Where "yyyy" is the 4 digit year format.
- **fulltime** - Fulltime indicator for this term. One of TRUE, FALSE.




Awarded Degrees

- **id** - Numeric identifier that will be used to join this awarded degree to it's student.
- **program\_code** - Program code that will be used to join this awarded degree to a university program.
- **academic\_period** - The academic period in which this degree was awarded. One of Winter yyyy, Spring yyyy, Summer yyyy, Fall yyyy. Where yyyy is the 4 digit year format.


The system receives all input data from the users in podium. All modifications must be done in the main blackbrair instance. 

The files must be modified in a certain order:

## Approximate Cost 



## Appendix 
![image34.png](https://i.postimg.cc/FRJwvZvc/image34.png)
