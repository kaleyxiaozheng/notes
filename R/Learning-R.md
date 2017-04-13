Data types | example
--- | ---
numerics | 4.5
integers | 4
logical | TRUE, FALSE
characters | "some text"

1. check datat type
```javascript
my_number <- 42
my_character <- "universe"
my_logical <- FALSE

class(my_number)
class(my_character)
class(my_logcal)
```

2. create a vector with `c()`
```javascript
numeric_vector <- c(1, 10, 49)
character_vector <- c("a", "b", "c")
boolean_vector <- c(TRUE, FALSE, TRUE)
```

3. naming a vector with `names()`
```javascript
some_vector <- c("John Doe", "poker player")
names(some_vector) <- c("Name", "Profession")
some_vector

display:
Name     Profession 
"John Doe" "poker player" 
```
```javascript
// Poker winnings from Monday to Friday
poker_vector <- c(140, -50, 20, -120, 240)

// Roulette winnings from Monday to Friday
roulette_vector <- c(-24, -50, 100, -350, 10)

// Assign days as names of poker_vector
names(poker_vector) <- c("Monday", "Tuesday", "Wednesday", "Thursday", "Friday")

// Assign days as names of roulette_vectors
names(roulette_vector) <- names(poker_vector)
```

> it is fine to name the days into a variable, and reuse it to the vectors
```javascript
//Poker winnings from Monday to Friday
poker_vector <- c(140, -50, 20, -120, 240)

//The variable days_vector
days_vector <- c("Monday", "Tuesday", "Wednesday", "Thursday", "Friday")
 
//Assign the names of the day to roulette_vector and poker_vector
names(poker_vector) <- days_vector 
```

```javascript
// As vectors do calculating, just calculate the content of the vectors

// Poker and roulette winnings from Monday to Friday:
poker_vector <- c(140, -50, 20, -120, 240)
roulette_vector <- c(-24, -50, 100, -350, 10)
days_vector <- c("Monday", "Tuesday", "Wednesday", "Thursday", "Friday")
names(poker_vector) <- days_vector
names(roulette_vector) <- days_vector

// Assign to total_daily how much you won/lost on each day
total_daily <- poker_vector + roulette_vector
```

> `sum()` is used to calculate the sum of all elements of the vector
```javascript
//Poker and roulette winnings from Monday to Friday:
poker_vector <- c(140, -50, 20, -120, 240)
roulette_vector <- c(-24, -50, 100, -350, 10)
days_vector <- c("Monday", "Tuesday", "Wednesday", "Thursday", "Friday")
names(poker_vector) <- days_vector
names(roulette_vector) <- days_vector

//Total winnings with poker
total_poker <- sum(poker_vector)

//Total winnings with roulette
total_roulette <-  sum(roulette_vector)

//Total winnings overall
total_week <- total_poker + total_roulette

//Print out total_week
  total_week

// Check if you realized higher total gains in poker than in roulette 
total_poker > total_roulette
```

> select specific element of a vector (matrices, data frame)
```javascript
poker_vector <- c(140, -50, 20, -120, 240)
days_vector <- c("Monday", "Tuesday", "Wednesday", "Thursday", "Friday")
//Define a new variable based on a selection
poker_wednesday <- poker_vector[3]

//Assign the poker results of Tuesday, Wednesday and Thursday to the variable poker_midweek.
poker_midweek <- poker_vector[c(2, 3, 4)]
//or
poker_midweek <- poker_vector[2:4]

//Tackle the previous exercise is by using the names of the vector
poker_vector["Monday"]
poker_start <- poker_vector[c("Monday", "Tuesday", "Wednesday"]

// Calculate the average of the elements in poker_star
mean(poker_start)
```

> Do comparison operations on vector
```javascript
c(4, 5, 6) > 5
// FALSE, FALSE, TRUE

poker_vector <- c(140, -50, 20, -120, 240)
days_vector <- c("Monday", "Tuesday", "Wednesday", "Thursday", "Friday")
names(poker_vector) <- days_vector
selection_vector <-  poker_vector > 0
selection_vector
```
> In the previous exercises you used `selection_vector <- poker_vector > 0` to find the days on which you had a positive poker return. You can select the desired elements, by putting selection_vector between the square brackets that follow poker_vector:`poker_vector[selection_vector]` R knows what to do when you pass a logical vector in square brackets: it will only select the elements that correspond to TRUE in selection_vector.

4. Matrix
> In R, a matrix is a collection of elements of the same data type (numeric, character, or logical) arranged into a fixed number of rows and columns. Since you are only working with rows and columns, a matrix is called two-dimensional.

> You can construct a matrix in R with the `matrix()` function. Consider the following example:`matrix(1:9, byrow = TRUE, nrow = 3)`

> The argument `byrow` indicates that the matrix is filled by the rows. If we want the matrix to be filled by the columns, we just place `byrow = FALSE`.
The third argument `nrow` indicates that the matrix should have three rows.

> three vectors are defined. Each one represents the box office numbers from the first three Star Wars movies. The first element of each vector indicates the US box office revenue, the second element refers to the Non-US box office

> Use `c(new_hope, empire_strikes, return_jedi)` to combine the three vectors into one vector. Call this vector `box_office`.

> Construct a matrix with 3 rows, where each row represents a movie. Use the `matrix()` function to this. The first argument is the vector `box_office`, containing all box office figures. Next, you'll have to specify `nrow = 3` and `byrow = TRUE`. Name the resulting matrix `star_wars_matrix`.

```javascript
// Box office Star Wars (in millions!)
new_hope <- c(460.998, 314.4)
empire_strikes <- c(290.475, 247.900)
return_jedi <- c(309.306, 165.8)

// Create box_office
box_office <- c(new_hope, empire_strikes, return_jedi)

// Construct star_wars_matrix
star_wars_matrix <- matrix(box_office, byrow = TRUE, nrow = 3)

// Vectors region and titles, used for naming
region <- c("US", "non-US")
titles <- c("A New Hope", "The Empire Strikes Back", "Return of the Jedi")

// Name the columns with region
colnames(star_wars_matrix) <- region
// Name the rows with titles
rownames(star_wars_matrix) <- titles
// Print out star_wars_matrix
star_wars_matrix
```

> In R, the function `rowSums()` conveniently calculates the totals for each row of a matrix. This function creates a new vector:`rowSums(my_matrix)`

```javascript
box_offices <- c(460.998, 314.4, 290.475, 247.900, 309.306, 165.8)
star_war_matrix <- matrix(box_offices, byrow = TRUE, nrow = 3, dimnames = list(c("A New Hope", "The Empire Strikes Back", "Return of the Jedi"),c("US", "non-US")))

// Calculate worldwide box office figures
worldwide_vector <- rowSums(star_wars_matrix)
```
> You can add a column or multiple columns to a matrix with the `cbind()` function, which merges matrices and/or vectors together by column. For example:`big_matrix <- cbind(matrix1, matrix2, vector1 ...)`

```javascript
box_offices <- c(460.998, 314.4, 290.475, 247.900, 309.306, 165.8)
star_war_matrix <- matrix(box_offices, byrow = TRUE, nrow = 3, dimnames = list(c("A New Hope", "The Empire Strikes Back", "Return of the Jedi"),c("US", "non-US")))

// Calculate worldwide box office figures
worldwide_vector <- rowSums(star_wars_matrix)

// Bind the new variable worldwide_vector as a column to star_wars_matrix
all_wars_matrix <- cbind(star_wars_matrix, worldwide_vector)
```
```javascript
getwd() // print the current working directory - cwd 
ls()    // list the objects in the current workspace
setwd(mydirectory)      // change to mydirectory
setwd("/usr/rob/mydir") // on linux

// view and set options for the session
help(options) // learn about available options
options() // view current option settings
options(digits=3) // number of digits to print on output

// work with your previous commands
history() // display last 25 commands
history(max.show=Inf) // display all previous commands

// save your command history 
savehistory(file="myfile") // default is ".Rhistory" 

// recall your command history 
loadhistory(file="myfile") // default is ".Rhistory"

// save the workspace to the file .RData in the cwd 
save.image()

// save specific objects to a file
// if you don't specify the path, the cwd is assumed 
save(object list,file="myfile.RData")

// load a workspace into the current session
// if you don't specify the path, the cwd is assumed 
load("myfile.RData")

q() // quit R. You will be prompted to save the workspace.
```

```javascript
 // star_wars_matrix and star_wars_matrix2 are available in your workspace
star_wars_matrix  
star_wars_matrix2 

 // Combine both Star Wars trilogies in one matrix
all_wars_matrix <- rbind(star_wars_matrix, star_wars_matrix2) 
```

> Just like every `cbind()` has a `rbind()`, every `colSums()` has a `rowSums()`

> Similar to vectors, you can use the square brackets `[ ]` to select one or multiple elements from a matrix. Whereas vectors have one dimension, matrices have two dimensions. You should therefore use a comma to separate that what to select from the rows from that what you want to select from the columns. For example:
`my_matrix[1,2]` selects the element at the first row and second column.
`my_matrix[1:3,2:4]` results in a matrix with the data on the rows 1, 2, 3 and columns 2, 3, 4.
If you want to select all elements of a row or a column, no number is needed before or after the comma, respectively:
`my_matrix[,1]` selects all elements of the first column.
`my_matrix[1,]` selects all elements of the first row.

```javascript
// all_wars_matrix is available in your workspace
all_wars_matrix

// Select the non-US revenue for all movies
non_us_all <- all_wars_matrix[, 2]
  
// Average non-US revenue
mean(non_us_all)
  
// Select the non-US revenue for first two movies
non_us_some <-  all_wars_matrix[1:2, 2]
  
// Average non-US revenue for first two movies
mean(non_us_some)
```

> `2 * my_matrix` multiplies each element of `my_matrix` by two.

```javascript
// all_wars_matrix is available in your workspace
all_wars_matrix 

// Estimate the visitors
visitors <- all_wars_matrix / 5 
  
// Print the estimate to the console
visitors
```

```javascript
// all_wars_matrix and ticket_prices_matrix are available in your workspace
all_wars_matrix
ticket_prices_matrix

// Estimated number of visitors
visitors <- all_wars_matrix / ticket_prices_matrix

// US visitors
us_visitors <- visitors[, 1]

// Average number of US visitors
mean(us_visitors)
```

5. factor
> The term factor refers to a statistical data type used to store categorical variables

> The difference between a categorical variable and a continuous variable is that a categorical variable can belong to a limited number of categories. A continuous variable, on the other hand, can correspond to an infinite number of values.

> A good example of a categorical variable is the variable 'Gender'. A human individual can either be "Male" or "Female", making abstraction of inter-sexes. So here "Male" and "Female" are, in a simplified sense, the two values of the categorical variable "Gender", and every observation can be assigned to either the value "Male" of "Female".

> To create factors in R, you make use of the function `factor()`. First thing that you have to do is create a vector that contains all the observations that belong to a limited number of categories. For example, `gender_vector` contains the sex of 5 different individuals:
`gender_vector <- c("Male","Female","Female","Male","Male")`

> It is clear that there are two categories, or in R-terms **'factor levels'**, at work here: "Male" and "Female". The function `factor()` will encode the vector as a factor:
`factor_gender_vector <- factor(gender_vector)`

> There are two types of categorical variables: **a nominal categorical variable** and **an ordinal categorical variable**.

> A **nominal** variable is a categorical variable without an implied order. This means that it is impossible to say that 'one is worth more than the other'. For example, think of the categorical variable animals_vector with the categories "Elephant", "Giraffe", "Donkey" and "Horse". Here, it is impossible to say that one stands above or below the other. 

> In contrast, **ordinal** variables do have a natural ordering. Consider for example the categorical variable temperature_vector with the categories: "Low", "Medium" and "High". Here it is obvious that "Medium" stands above "Low", and "High" stands above "Medium".

```javascript
// Animals
animals_vector <- c("Elephant", "Giraffe", "Donkey", "Horse")
factor_animals_vector <- factor(animals_vector)
factor_animals_vector

// Temperature
temperature_vector <- c("High", "Low", "High","Low", "Medium")
factor_temperature_vector <- factor(temperature_vector, order = TRUE, levels = c("Low", "Medium", "High"))
factor_temperature_vector
```

> `levels(factor_vector) <- c("name1", "name2", ...)` change the name of factor level
```javascript
// Code to build factor_survey_vector
survey_vector <- c("M", "F", "F", "M", "M")
factor_survey_vector <- factor(survey_vector)

// Specify the levels of factor_survey_vector
levels(factor_survey_vector) <- c("Female", "Male")

factor_survey_vector
```

> `summary()` give you a quick overview of the contents of a variable
```javascript
// Build factor_survey_vector with clean levels
survey_vector <- c("M", "F", "F", "M", "M")
factor_survey_vector <- factor(survey_vector)
levels(factor_survey_vector) <- c("Female", "Male")
factor_survey_vector

// Generate summary for survey_vector
summary(survey_vector)

// Generate summary for factor_survey_vector
summar(factro_survey_vector)
```

> Ordered factors,  the function `factor()` transforms `speed_vector` into an **unordered factor**, however, whenever you want to converted it to an **ordinal factor** since its categories have a natural ordering, you have to add two additional arguments: ``ordered`` and ``levels``

```javascript
factor(some_vector,
       ordered = TRUE,
       levels = c("lev1", "lev2" ...))
```

```javascript
// Create speed_vector
speed_vector <- c("fast", "slow", "slow", "fast", "insane")

// Convert speed_vector to ordered factor vector
factor_speed_vector <- factor(speed_vector, ordered = TRUE, levels = c("slow", "fast", "insane"))

// Print factor_speed_vector
factor_speed_vector
summary(factor_speed_vector)
```

> Comparing orderd factors
```javascript
// Create factor_speed_vector
speed_vector <- c("fast", "slow", "slow", "fast", "insane")
factor_speed_vector <- factor(speed_vector, ordered = TRUE, levels = c("slow", "fast", "insane"))

// Factor value for second data analyst
da2 <- factor_speed_vector[2]

// Factor value for fifth data analyst
da5 <- factor_speed_vector[5]

// Is data analyst 2 faster than data analyst 5?
da2 > da5
```

6. A data frame has the variables of a data set as columns and the observations as rows. This will be a familiar concept for those coming from different statistical software packages such as SAS or SPSS.

> Working with large data sets is not uncommon in data analysis. When you work with (extremely) large data sets and data frames, your first task as a data analyst is to develop a clear understanding of its structure and main elements. Therefore, it is often useful to show only a small part of the entire data set.

> So how to do this in R? Well, the function `head()` enables you to show the first observations of a data frame. Similarly, the function `tail()` prints out the last observations in your data set.

> Both `head()` and `tail()` print a top line called the 'header', which contains the names of the different variables in your data set.

```javascript
head(mtcars)
tail(mtcars)

str(mtcars)
```

> creating a data frame
```javascript
// Definition of vectors
name <- c("Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune")
type <- c("Terrestrial planet", "Terrestrial planet", "Terrestrial planet", 
          "Terrestrial planet", "Gas giant", "Gas giant", "Gas giant", "Gas giant")
diameter <- c(0.382, 0.949, 1, 0.532, 11.209, 9.449, 4.007, 3.883)
rotation <- c(58.64, -243.02, 1, 1.03, 0.41, 0.43, -0.72, 0.67)
rings <- c(FALSE, FALSE, FALSE, FALSE, TRUE, TRUE, TRUE, TRUE)

// Create a data frame from the vectors
planets_df <- data.frame(name, type, diameter, rotation, rings)

// Only show name of solar system with rings 
rings_vector <- planets_df$rings
rings_vector <- [rings_vector]
planets_df[rings_vector, "name"]

// Select all columns for planets with rings
planets_df[rings_vector, ]
```

> selection of data frame elements
```javascript
planets_df[1, ]
planets_df[1, 2]

planets_df[1:3, "type"]
```

> Only select planets with rings
`planets_df[, 3]` or `planets_df[, "diameter"]` or a short-cut `planets_df$diameter`


> `subset()`
```javascript
subset(my_df, subset = some_condition)

subset(planet_df, subset = rings)
```

> Use `subset()` on planets_df to select planets that have a diameter smaller than Earth. Because the diameter variable is a relative measure of the planet's diameter w.r.t that of planet Earth, your condition is `diameter < 1`.
```javascript
subset(planet_df, subset = diameter < 1)
```

> In data analysis you can sort your data according to a certain variable in the data set. In R, this is done with the help of the function `order()`. `order()` is a function that gives you the ranked position of each element when it is applied on a variable

```javascript
a <- c(100, 10, 1000)
order(a)
[1]2, 1, 3

// we can use the output of order(a) to reshuffle a
a[order(a)]
[1]10, 100, 1000

// Use order() to create positions
positions <- order(planets_df$diameter)

// Use positions to sort planets_df
planets_df[positions, ]
```

7. List
> * **Vectors** (one dimensional array): can hold numeric, character or logical values. The elements in a vector all have the same data type.
> * **Matrices** (two dimensional array): can hold numeric, character or logical values. The elements in a matrix all have the same data type.

> * **Data frames** (two-dimensional objects): can hold numeric, character or logical values. Within a column all elements have the same data type, but different columns can be of different data type.

> A list in R allows you to gather a variety of objects under one name (that is, the name of the list) in an ordered way. These objects can be matrices, vectors, data frames, even other lists, etc. It is not even required that these objects are related to each other in any way.

> You could say that a list is some kind super data type: you can store practically any piece of information in it!

> `list(comp1, comp2,...)` to create a list
```javascript
// Vector with numerics from 1 up to 10
my_vector <- 1:10 

// Matrix with numerics from 1 up to 9
my_matrix <- matrix(1:9, ncol = 3)

// First 10 elements of the built-in data frame mtcars
my_df <- mtcars[1:10,]

// Construct list with these different elements:
my_list <- list(my_vector, my_matrix, my_df)

// create a named list
names(my_list) <- c("vec", "mat", "df")
```

> Start by creating a list for the movie "The Shining". We have already created the variables mov, act and rev in your R workspace.
```javascript
// Complete the code on the right to create shining_list; it contains three elements:
// 1. moviename: a character string with the movie title (stored in mov)
// 2. actors: a vector with the main actors' names (stored in act)
// 3. reviews: a data frame that contains some reviews (stored in rev)
//The variables mov, act and rev are available, Finish the code to build shining_list
shining_list <- list(moviename = mov, actors = act, reviews = rev)
```

> Selecting elements from a list
> one way to select a component is using the numbered position of that component. For example, to "grab" the first component of shining_list you type `shining_list[[1]]`

> ### Important to remember: to select elements from vectors, you use single square brackets: [ ]

> You can also refer to the names of the components, with [[ ]] or with the $ sign. Both will select the data frame representing the reviews: `shining_list[["reviews"]]` or `shining_list$reviews`

> Besides selecting components, you often need to select specific elements out of these components. For example, with `shining_list[[2]][1]` you select from the second component, actors (shining_list[[2]]), the first element ([1]). 
```javascript
// Print out the vector representing the actors
shining_list$actors

// Print the second element of the vector representing the actors
shining_list$actors[2]
```

> Adding more moives information to the list

> To conveniently add elements to lists you can use the `c() function, that you also used to build vectors:
`ext_list <- c(my_list , my_val)`

>  If you want to give the new list item a name, you just add the name as you did before:
`ext_list <- c(my_list, my_name = my_val)`
```javascript
// We forgot something; add the year to shining_list
shining_list_full <- c(shining_list, year = 1980)

// Have a look at shining_list_full
str(shining_list_full)
```
