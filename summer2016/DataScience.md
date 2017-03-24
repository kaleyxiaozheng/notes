#### Week 1
* What is data science?
>

> ##### What differentiates data science from statistics ?
> **data science** is a **_holistic approach_**. We're increasingly finding data in the wild, and data scientists are involved with gathering data, massaging it into a tractable form, making it tell its story, and presenting that story to others. statistics is the grammar of data science

>##### The foundation of data science
> increased storage capacity demands increased sophistication in the analysis and use of that data

>##### he importance of Moore's law
>Data expands to fill the space you have to store it. The more storage is available, the more data you will find to put into it

>##### How do we make data useful
> Step-1: data conditioning or getting data into a state where it's usable.
    >> Data conditioning can involve cleaning up messy HTML with tools like Beautiful Soup, natural language processing to parse plain text in English and other languages, or even getting humans to do the dirty work.

> Step-2: think about the quality of data
  >> Data is frequently missing or incongruous, try to make data meaningful

> ##### Working with data at scale
> To store huge datasets effectively, we've seen a new breed of databases appear. Thees are frequently called NoSQL databases, or Non-Relational databases.
  >> Cassandra: Developed at Facebook, in production use at Twitter, Rackspace, Reddit.
  >> HBase: Part of the Apache Hadoop project, and modeled on Goole's BigTable. Suitable for extremely large databases, distributed across thousands of nodes

>##### The most popular open source implementation of MadReduce is the Hadoop project.

> statistics is the grammar of data science. It is crucial to "making data speak coherently"


* What is machine learning?
> Machine Learning (ML) is concerned with the development of algorithms and techniques that allow computers to learn.
Machine learning is the area of computer science, in which we investigate algorithms that can adapt their behavior over time, improve their behavior in order to achieve some tasks.

  > Why do we need Machine Learning?
    * Human expertise is not available - Martian exploration
    * Many solutions need to be adapted automatically - user personalization
    * Situation changes over time - junk email
    * There are large amounts of data - discover astronomical objects
    * Humans are expensive to use for the work - handwritten zip code recognition


* What is big data?
> Big data is high-volume, and high-velocity and/or high-variety information assets that demand cost-effective, innovative forms of information processing that enable enhanced insight, decision making, and process automation.
> Big data is when the size of the data itself becomes part of the problem

>> Big is a moving target
>> Big is when you can't fit it on one machine
>> Big data is a cultural phenomenon
>> The 4 V's: volume, variety, velocity, and value

* Data Science process and data science value chain
> First we have the real world. Inside the real world are lots of people busy at various activities, and we have data on one of these things.

 > Specifically, we will start with raw data - logs, employee emails, activities records. We want to process this to make it clean for analysis. So we build and use pipelines of data munging: joining, scraping, wrangling. To do this we use tools such as Python, shell scripts, R, or SQL.

 > Once we have this clean dataset, we should be doing some kind of exploratory data analysis. In the course of doing exploratory data analysis, we may realize that it isn't actually clean because of duplicates, missing values, absurd outliers. If that's the case, we may have to go back to collect more data, or spend more time cleaning the dataset.

 > Next, we design our model to use some algorithm. The model we choose depends on the type of problem we are trying to solve.

  > We then can interpret, visualize, report, or communicate our results.

 > Alternatively, our goal may be to build or prototype a "data product", like  a recommendation system, email span filter

 > **The key here that makes data science special and distinct from statistics is that data product then gets incorporated back into the real world, and users interact with that product, and that generates more data, which creates a feedback loop.**

![Data Science Process](http://image.slidesharecdn.com/07moonsoolee-151103191557-lva1-app6892/95/data-science-lifecycle-with-apache-zeppelin-and-spark-by-moonsoo-lee-3-638.jpg?cb=1446578323)

![Data science in Data Science Process](/Users/zhengxiao/Projects/notes/Data-Scientist-DataProcess.png)

![Data science value chain](/Users/zhengxiao/Projects/notes/Value-Chain.png)

#### Week 2 (1.5 ~ 1.7)
* What does a data scientist do?
> Data scientist spends a lot of time in the process of collecting, cleaning, and munging data, because data is never clean.

* What skills do they need?
> The ability to take data - to be able to understand it, to process it, to extract value from it, to **visualize it, to communicate it** - that's going to be a hugely important skill in the next decades.

> This process requires persistence, statistics, and software engineering skills - skills that are also necessary for understanding biases in the data, and for debugging logging output from code. Once he/she gets the data into shape, she will need to do analysis and visualization, and he/she will find patterns, build models, and algorithms. After that, he/she will communicate with team members, engineers. and leadership in a clear language and with data visualizations, and let them understand the implications.

> Different styles of Data Scientists:
  >> * **Data developers** : were relatively strong in all areas except statistics, they are people focused on the technical problem of managing data - how to get it, store it, and learn from it.
  >> * **Data researchers** : had little programming, they are people with an academic research background, using their training to "understand complex processes"
  >> * **Data businesspersons** : had little Mathematics/Operations research and even less programming, they are most focused on the organization and how data projects yield profit.
  >> * **Data creatives** : were relatively strong in all areas except Mathematics/Operations research, they are the broadest of data scientists, those who excel at applying a wide range of tools and technologies to a problem, or creating innovative prototypes at hackathons.


* We can think of the data science process as an extension of or variation of the scientific method:
  * Ask a question
  * Do background research
  * Construct a hypothesis
  * Test your hypothesis by doing an experiment
  * Analyze your data and draw a conclusion
  * Communicate your results

* Impact data science is having
  * cloud services
  > datafication of you, facebook, linkedin, google, health and medical
  * effect on science
  > Fields like physics, bioinformatics and earth science used big data anyway.
  * social good
  > many opportunities exist: funding and organizational applications, helping underprivileged pockets of first-world countries.
  * futurology
  > Your health dashboard can be online and shared by your GP
  > Your  bloodstream can be instrumented too assess insulin levels.
  > self driving cars   
* Tutorial
  * Investigated Motion charts as a data visualization tool


  Advantages | Disadvantages
  --- | ---
  time dimension allows deeper insights & observing trends | not suited for static media
  good for exploratory work | display can be overwhelming and controls are complex
  motion allows identification for this out of common "rhythm" | not suited for representing all types of data
  appeal to the brain at a more instinctual intuitive level | data scientists who branch into visualization must be aware of the limitations of uses


  * Jobs in data science

> 1. Where data comes from
  * Moore's law - exponential increase in computing power/storage
  * and data wrangling
> 2. Working with data at scale
  * Big data processing and the role of statistical inference
> 3. Making data tell its story
  * the importance of visualization tools
> 4. Data scientists
  * what it is they do



#### Week 3

* There are several process models relevant to data science.


Life cycle | Value chain
--- | ---
used in biology to model the cycle of life | business term used to describe the **series of activities done to create an item of value**



>> **value chain** is a business term used to describe the series of activities done to create an item of value.

> The standard value chain:
1. **Collection**: getting the data.
2. **Engineering**: storage and computational resources.
3. **Governance**: overall management of data.
4. **Wrangling**: data preprocessing, cleaning.
5. **Analysis**: discovery (learning, visualization, etc.).
6. **Presentation**: arguing that results are significant and useful.
7. **Operationalization**: putting the results to work.

* Analytics levels
> Analytic levels are a simplified model of the levels of information provided to decision makers. The lower levels cover standard business intelligence reporting, whereas the higher levels reflect actual analytics.
> * **The top three levels in this model are:**
    1. **Forecasting**: estimating the trend
    2. **Predictive modeling**: more extensive modeling of future behavior
    3. **Optimization**: given constraints and priorities, attempting to optimizing future plans based on predictive models

* Descriptive Analytics:
> **gain insight** from historical data

* Predictive Analytics:
> **make predictions** using statistical and machine learning techniques

* Prescriptive Analytics;
> **recommend decisions** using optimization, simulation, etc.

* Modeling decision problems with Influence Diagrams
> * influence diagram is a method for modeling decision making.
  >> 1. chance nodes: an uncertain quantity. "What is the outcome"
  >> 2. Know variable notes: value you do Know. "What is the situation"
  >> 3. action/decisions nodes. "What do we do"
  >> 4. Objective/utility nodes: a measure of the value of your satisfaction with possible outcomes. "How do we like it"
>

* data business models:
> distinct business models based around data
* intelligent systems business models:
> distinct business models for "smarter" systems
* big data value chain:
> big data involves the broader field.
* big data landscape:
> mapping the ecosystem of tools, services.
  * information brokering service: buys and sells data/information for others.
  * information-based differentiation: satisfies customers by providing a differentiated service built on the data/information.
  * information-based delivery network: deliver data information for others.


* Introduction to Python for data science
* Tutorial
  * Modeling with influence Diagrams
  * Getting familiar with Python
```Python
  > import pandas as pd
  > df = pd.DataFrame( {
    'StudentID' : [264422, 264423, 264444],
    'Name' : ['Steven', 'Alex', 'Bill']
  } )
  > df //print out the table
  > df['Name']  //Select a column by using its column name
```

```Python
  import matplotlib.pylib as plt
  > df = pd.DataFrame({
    'X' : [0, 1, 2, 3, 4, 5, 6],
    'Y' : [0, 1, 4, 9, 16, 25, 36]
  })
  > plt.scatter( df['X'], df['Y'] )
  > plt.show()
```

* Data visualizations should be pervasive and embedded in the environment of a good company. They're integrated in products and processes. They should enable action

#### Week 4
* Data science case studies
* Characterizing them in terms of:
  * data sources: where does the data come from
  * Volume: how much data
  * veracity: is the data correct
  * Velocity: how does it change over time
  * Variety: what different kinds of data are there
  * Software: what major software is used in the various steps
  * Analytics: what statistical analysis & visualization is needed
  * Processing: what are the computational requirements
  * capabilities: what are key requirements of the operational system
  * Transformation: what sorts of wrangling is done
  * Data Consumer: operationalization, what happens to the results
  * Security & Privacy: what security/privary requirements are there
  * Lifecycle Management: What ongoing requirements are there

  >> **Analytics**
    >> Data Analytics have top 5 takeaways
    >> 1. Communication skills are underrated
      >>>  If you can't present your analysis into digestible concepts for your CEO to understand, your analysis is only useful to yourself.
      >>> You need to be able to clearly communicate the methodology and results of your analysis to someone who isn't involved with the data. When communicating over emails, you have to be very specific in the question you're asking. Not communicating properly can easily start a wave of confusion.

    >> 2. Te biggest challenge for a data analyst isn't modeling, it's cleaning and collection
      >>> Data analysts spend most of their time collecting and cleaning the data required for analysis. Answering questions like "where do you collect the data?", "how do you collect the data?", and "how should you clean the data?", require much more time than the actual analysis itself.
    >> 3. A Data Scientist is better at statistics than a software engineer and better at software engineering than a statistician
      >>> The greatest difference between a data scientist and a data analyst is the understanding of computer science and conducting analysis with data at scale.
    >> 4. The data industry is still nascent, if you want to work with a variety of stakeholders in a more free-form role, the time to do so is now
      >>> Data scientists and data analysts all say they interact with a many parts of the company from engineering to business intelligence to product managers. The roles of data scientists and data analysts are largely undefined and vary by your own skill set and the company’s needs.

      >> 5.Both roles require a curiosity about working with  data, a quality more important than your technical abilities
      >>> The ability to discover trends and patterns previously unseen is what truly makes you valuable. Having a curiosity enables you to ask the creative questions necessary for transcendent analysis. As practice, when given a dataset, ask yourself what questions do you have about the data and how would you answer them?

* Tutorial:
  * Visual analytics with SAS
  > Statistical Analysis System (SAS) is both a statistical programming language and an associated software suite for analyzing and visualizing data

  > step1 define a data table : data patients;

  > step2 tell SAS where to find the file and that it is a fixed-width file: infile "../../aa.txt" PAD;

  > step3 tell SAS which parts of each line correspond to particular variables:

  input

  @ 5 visit mmddyy10.  -> variable **visit** starts at character positon 5(@5) and has a particular date format(mmddyy10)
  @ 4 gender $1.; -> variable **gender** starts at character position 4(@4) and is a string of length 1($1)

**Advantages** | **Disadvantages**
--- | ---
Visualization with **no coding or programming** | vendor "lock-in"
handles large amounts of data easily | not a "data-based" business
flexible range of analytics | a traditional business offering tools, Application as a Service (AaaS)
capability of drilling down | more of a high-end, commodity analytics tool
more accessible to broader range of users |
cross-platform so available almost anywhere |

#### Week 5
* Characterizing big data:
  * Variability: change in meaning over time
  * Visualization: one method for analysis
  * value: what we want to get out of the data
  * Volume: how much data
  * veracity: is the data correct
  * Velocity: how does it change over time
  * Variety: what different kinds of data are there
* What is metadata?
> Metadata is defined as data about data. It is "structured information that describes, explains, locates, or otherwise makes it easier to retrieve, use or manage an information resource".

  * different types of metadata
    1. **Descriptive metadata** describes content for identification and retrieval, such as title, author, and abstract.
    2. **Structural metadata** documents relationships and links, such as chapter in books, elements in XML.
    3. **Administrative metadata** helps to manage information, version number, archiving date.

    * MetaData: Key concepts
    1. Machine-readable data : data/metadata which is in a format that can be understood by a computer, such as XML, JSON
    2. Markup language : system for annotating a document in a way that is syntactically distinguishable from the text, such as Javadoc.
    3. Digital container : file format whose specification describes how different elements of data and metadata coexist in a computer file, such as MPEG


  * types of data
  1. Geospatial data
  2. linked open data : XML
  3. IP Connection Data
  4. Transactional data
  5. Twitter data
  6. Internet of things data



  * Moore's law, Koomey's law, Bell's law and Zimmerman's law related to big data
  > Moore's law - exponential increase in computing power/storage. Data expands to fill the space you have to store it.

  > Koomey's law - Data science type analysis will become more and more available to the general public with lower cost computing.

  > Bell's law - every ten years or so a new class of computer system will emerge to fundamentally change the way we do business. Recent classes along this line have been mobile computing, the Cloud, and the Internet of things. Each is arguably critical for Data Science. These new classes open up whole new avenues for collection, storing, processing and distributing data.

  > Zimmerman's law - privacy decrease as ability and to store and track data increases.

* What is Big data and Hadoop
> For distributed storage, either using Hadoop's Map-Reduce-based ecosystem or just using Hadoop's HDFS

* What is Apache spark
> Spark provides its own ecosystem of tools, independent of the Hadoop ecosystem
* Introduction to R for data science
* Tutorial:
  * Exploratory analysis of big data in R

```Python
  > 2 ^ 3 + 2
  [1] 10

  > A <- 10 //A = 10
```

#### Week 6
* Processing big data
  * different types of databases (SQL, semi-structured, graph, noSQL, etc.)
  > large scale, distributed processing, robustness, general query languages, some notion of consistency

  * different types of processing
  1. interactive - bringing humans into the loop
  2. streaming - massive data streaming through system with little storage
  3. batch - data stored and analyzed in large blocks, "batches" easier to develop and analyze

  * distributed processing (map-reduce, spark, etc)
    > distributed processing - breaking up computation to scale it up

* Introduction to Unix Shell commands for data science
> pipe | - the output of one program to be used as the input to another, connect porgrams

> Redirect > -   save the results in a file

> cat - concatenate and print files, load a file and output it to the terminal

> & - find out how to run programs in parallel using the ampersand notation : myprogram &

> awk 'rand()<1/100 {print $6,$7,$14}', it scans each input file for lines that mach any of a sent of patterns

> du - check the size of the directory

> ls - list directory contents

> pwd -return working directory

> cp - copy files

> cd - change directory

> unzip - list, text and extract compressed files in a ZIP archive

> less - viewing input file on backward movement as well as forward movement

> grep - checks each line of a file to see if it matches a particular pattern and returns the line if it does.

> wc - word count command to find out how long the file is

> sort - sort lines of text files

> chmod - change file modes or Access Control Lists

* Tutorial:
  * Manipulating large files in the Shell

  * Understanding map-reduce
  > simple distributed processing framework developed at Google from 2004

  > intended to run on commodity hardware; so has fault-tolerant infrastructure

  > from a distributed systems perspective, is quite simple

  > **cont.**
  1. requires simple data parallelism followed by some merge processing
  2. Google now uses "Cloud Data-flow", available commercially, as open source


  * Understand Hadoop

> Hadoop provides an inexpensive and open source platform for parallelizing processing

> based on simple Map-Reduce architecture

> broad range of tools and easy to use

> not suited to streaming or where a pipeline architecture is needed


* Understand Spark

> Google's data-flow and Spark's DAG processor are more recent developments

> include Map-Reduce capabilities

> but also provide for **shared-memory**

> useful for training Machine Learning models in a distributed fashion


* Database Background concepts
  > **in-database analytics** the analytics is done within the DB
  > **in-memory database** the DB content resides memory
  > **cache** data stored in-memory
  > **key-value** value accessible by key-value
  > **information silo** an insular information system incapable of reciprocal operation with other, related information systems

#### Week 7
* using data
> access to new data sources or clever and creative use of existing multiple data sources
  >> examples : NYC data, traffic prediction, web pharmacovigilance, predictive analytics for banks

* open data
> Open data is data that be freely available to everyone to use and republish as they wish, without restrictions from copyright, patents or other mechanisms of control

* What is data wrangling?
> manipulating data to make it directly usable for analysis
  1. integrate data sources
  2. geocoding
  3. convert free text dates to standard format

* Standards
> support cooperation, reuse, common tools, etc.

* Tutorial:
  * Wrangling with SAS, DataWrangler and Python

SAS | DataWrangler | Python
--- | --- | ---
* general purpose Data Analytics | * Specialized Data Wrangling tool | * general purpose open-source programming language
* strange syntax | * intuitive Graphical user interface (UGI) | * contains packages for manipulating data
* very widely used commercial product | * no coding required |

#### Week 8
* Common tools used (Hadoop and related Apache tools)
* APIs and Software-as-a-Service
* Case studies
* Tutorial:
  * Wrangling big text data (From Twitter) using shell commands


#### Week 9
* Types of data analysis:
  * prediction, prediction with unknown variables, clustering, forecasting, etc.
* Learning theory

> Truth - for variables for an individual data case, the truth can be measured directly

> Quality - to evaluate the quality of results derived rom learning

  * error vs loss functions

  > Quality is a function of error

  * linear and polynomial regression

  > Linear regression - data is shown with blue dots, regression fits a very simple equation of the data y(x:a) = a0 + a1x

  > Polynomial regression - uses the same linear regression infrastructure to fit a higher order polynomial

  * overfitting due to overly complicated model/insufficient data
> If we don't have very much data and we try to fit a complicated model to it, the model will make wild predictions

> cont. of overfitting
1. small polynomial; cannot fit the data well; said to have high bias
2. large polynomial; can fit the data well; fits the data too well; said to have small bias
3. if there is known error in the data, then a close fit is  
4. poor fit due to high bias called under-fitting
5. poor fit due to low bias called over-fitting

* bias
> what is the least error one can get when fitting any possible model to the data (impracticle to achieve)

* Variance
> what is the average error one gets for different data sets over and above the minimum error.

  * training set and test set

  > do your learning, run your algorithm, build your model using the training set

  > run evaluation using the test set

  * signal to noise
  > Signal: "truth" usually unknown

  > Noise: difference between "truth" and the data

  * ensembles
> given only data, we don't know the truth and can only estimate what may be the "truth"

  > An ensemble is a collection of possible/reasonable models

* Tutorial:
  * understanding learning theory through examples in Python


#### Week 10
* Segmentation
> A segmentation model is a graphical model where
  1. the cluster variable is unknown, called "latent"
  2. the cluster variable identifies the segments

* Dependence
> event A and event B are independent if knowing whether A occurred **provides no information** about whether B will occur or not

* Correlation
> if variables are continuous, dependence between the variables is usually referred to as "correlation"

> statistical notion of _correlation_ usually measures the "linear" dependence between variables

* Causality
> a relationship between an event (the cause) and another event (the effect), where the cause is responsible for the effect

> measured by intervention

* latent variable : variable whose value never appears in any data

* Six types of analyses every data scientist should know
1. Descriptive (quantitatively describe data)
2. Exploratory (explore relationships between variables)
3. Inferential (infer values of unknown variables)
4. Predictive (predict future values)
5. Causal (determine if a causal relationship exists)
6. Mechanistic (explain causal relationships)

* scripting languages
1. no formal or universally agreed definition
2. often interpreted and are high-level programming languages
3. automating tasks originally done one-by-one by hand
4. also, extension language, control language
5. e.g. bash, Perl, Python, R, Matlab

* Significance chasing : repeat many experiments until you get significance

* Imputing missing values
* Examples of analytic Software
* Case studies
* Introduction to Decision/Regression trees

> Simple & effective Machine Learning algorithms that

  > . **Recursively partition** (divide up) the feature space into regions

      > recursive partitioning - At each iteration, we divide the data to group similar instances together

  > . While grouping similar instances together

* Decision Trees:
  > . Predict binary (or categorical) outcomes
  > . Prediction is the most common value in each region

* Regression Trees:
  > . Predict continuous values
  > . Prediction is usually the average value in each region

* Algorithms for building Decision & Regression trees differ on the criteria used to:
  > decide on which feature to split on in each iteration
  > decide when to stop splitting

* Tutorial:
  * building predictive models with BigML
  > We'll train Decision and Regression Trees using BigML

  * BigML
  > * Example of a modern Machine learning Tool provided as an online service

  > * Emphasis on user-interface and making model building simple from a graphical interface perspective

  > * Combines Decision/Regression Tree Ensembles, Clustering, Frequent Itemset Mining, and Outlier Detection models

  > * Provides fewer classification/regression models in comparison to Weka, R, Python


#### Week 11
* Ethics and privacy
> **Privacy** as having control over how one shares oneself with others

> **Ethics** as the moral handling of data

* Regulatory compliance
> that organizations ensure that they are aware of and take steps to comply with relevant laws and regulations

* What is Data Governance
> supporting and handling:

  > 1. ethics, Confidentiality
  > 2. security
  > 3. consolidation and quality-assurance
  > 4. persistence
  > 5. regulator compliance
  > 6. organization policy compliance
  > 7. organization business outcomes


* Data Management case studies

> **Data management** is the development, execution and supervision of plans, policies, programs and practices that **control**, **protect**, **deliver** and **enhance the value of** data and informaiton assets
* Tutorial:
  * Understanding Privacy, Legal Requirements and the Prevention of Information Leaks

  * **Confidentiality** as information privacy, how information about an individual is treated and shared

  * **Security** as the protection of data, preventing it from being improperly used

  * implicit data : data not explicitly stored but inferred with reasonable precision from available data

#### Week 12
* Privacy & security
> Legal requirements for companies dealing with sensitive user data
