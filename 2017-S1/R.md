## Shiny
---
1. Build a user-interface
2. Add control widgets
3. Display reactive output
4. Use R scripts and data
5. Use reactive expressions
6. Sharing your apps

---

> ### Build a user-interface
```java
    //ui.R
    shinyUI(fluidPage(
        // to lay out the app by placing elements in the fluidPage function 
    ))
```

```java
    //server.R
    shinyServer(function(input, output){
        // ...
    })
```
> The code above is the bare minimum needed to create a Shiny app. The result is an empty app with a blank user-interface.

```java
    // ui.R
    shinyUI(fluidPage(
        titlePanel("Kaley"),
  
    sidebarLayout(position = "right",
            sidebarPanel( "sidebar panel"),
            mainPanel("main panel")
    )
    ))
    // server.R
    shinyServer(function(input, output){

    })

    // ui.R
    shinyUI(fluidPage(
        titlePanel("My Shiny App"),
        sidebarLayout(
            sidebarPanel(),
            mainPanel(
                h1("First level title"),
                h2("Second level title"),
                h3("Third level title"),
                h4("Fourth level title"),
                h5("Fifth level title"),
                h6("Sixth level title")
            )
        )
    ))

    // ui.R
    shinyUI(fluidPage(
        titlePanel("My Shiny App"),
        sidebarLayout(
            sidebarPanel(),
            mainPanel(
                h6("Episode IV", align = "center"),
                h6("A NEW HOPE", align = "center"),
                h5("It is a period of civil war.", align = "center"),
                h4("Rebel spaceships, striking", align = "center"),
                h3("from a hidden base, have won", align = "center"),
                h2("their first victory against the", align = "center"),
                h1("evil Galactic Empire.")
            )
        )
    ))

    // ui.R
     shinyUI(fluidPage(
        titlePanel("My Shiny App"),
         sidebarLayout(
            sidebarPanel(),
            mainPanel(
                p("p creates a paragraph of text."),
                p("A new p() command starts a new paragraph. Supply a style attribute to change the format of the entire paragraph.", style = "font-family: 'times'; font-si16pt"),
                strong("strong() makes bold text."),
                em("em() creates italicized (i.e, emphasized) text."),
                br(),
                code("code displays your text similar to computer code"),
                div("div creates segments of text with a similar style. This division of text is all blue because I passed the argument 'style = color:blue' to div", style = "color:blue"),
                br(),
                p("span does the same thing as div, but it works with",
                span("groups of words", style = "color:blue"),
                    "that appear inside a paragraph.")
            )
        )
    )

    // ui.R
    // put bigorb.png into a directory named www
    shinyUI(fluidPage(
  titlePanel("My Shiny App"),
  sidebarLayout(
    sidebarPanel(),
    mainPanel(
      img(src="bigorb.png", height = 400, width = 400)
    )
  )
))

// ui.R
shinyUI(fluidPage(
  titlePanel("R icon"),
  sidebarLayout(
    sidebarPanel(),
    mainPanel(
      img(src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1000px-R_logo.svg.png", height = 400, width = 400)
    )
  )
))
```
> Exercise
```java
// ui.R
shinyUI(fluidPage(
  titlePanel("My Shiny App"),
  sidebarLayout(
    sidebarPanel(
      p(h2("Installation")),
      p("Shiny is available on CRAN, so you can install it in the usual way from your R console:"),
      code("install.packages(\"shiny\")"),
      br(),
      br(),
      br(),
      br(),
      p(img(src="ricon.png", height = 20, width = 20), "shiny is a product of ", span("RStudio", style = "color:blue"))
    ), 
    mainPanel(
      p(h1("Introduction Shiny")),
      p("Shiny is a new package from RStudio that makes it incredibly easy to build interactive web applications with R."),
      br(),
      div("For an introduction and live expamles, visit the ", span(strong("Shiny homepage", style = "color:skyblue"))),
      br(),
      br(),
      p(h2("Features")),
      p(".Build useful web applications with only a few lines of code - no JavaScript required."),
      p(".Shiny applications are automatically \"live\" in the same way that ", span(strong("spreadsheets")), " are live. Outputs change instantly as users modify inputs, without requiring a reload of the browser.")
    )
  )
))

// server.R
shinyServer(function(input, output){

})
```
---

> ### Add control widgets
> [Application layout guide](https://shiny.rstudio.com/articles/layout-guide.html)

> widget - A web element that your users can interact with. Widgets provide a way for your users to send messages to the Shiny app.

> Each widget function requires several arguments. The first two arguments for each widget are

A Name for the widget. The user will not see this name, but you can use it to access the widget’s value. The name should be a character string.

A label. This label will appear with the widget in your app. It should be a character string, but it can be an empty string "".

```java
actionButton("action", lable = "Action")
```

```java
shinyUI(fluidPage(
    titlePanel("Basic widgets"),
  
    fluidRow(
        column(3, 
            h3("Buttons"),
            actionButton("action", label = "Action"),
            br(),
            br(),
            submitButton("Submit")),
    
        column(3,
            h3("Single checkbox"),
            checkboxInput("checkbox", label = "Choice A", value = TRUE)),
    
        column(3, 
            checkboxGroupInput("checkGroup", 
            label = h3("Checkbox group"), 
            choices = list("Choice 1" = 1, "Choice 2" = 2, "Choice 3" = 3), 
            selected = 1)),
    
        column(3, 
            dateInput("date", 
            label = h3("Date input"), 
            value = "2014-01-01"))   
    ),
    fluidRow(
    
    column(3,
        dateRangeInput("dates", label = h3("Date range"))),
    
    column(3,
        fileInput("file", label = h3("File input"))),
    
    column(3, 
        h3("Help text"),
        helpText("Note: help text isn't a true widget,", 
                    "but it provides an easy way to add text to",
                    "accompany other widgets.")),
    
    column(3, 
        numericInput("num", 
            label = h3("Numeric input"), value = 1))   
    ),
    fluidRow(
    
    column(3,
        radioButtons("radio", label = h3("Radio buttons"),
        choices = list("Choice 1" = 1, "Choice 2" = 2, "Choice 3" = 3),selected = 1)),
    
    column(3,
        selectInput("select", label = h3("Select box"), 
        choices = list("Choice 1" = 1, "Choice 2" = 2, "Choice 3" = 3), selected = 1)),
    
    column(3, 
        sliderInput("slider1", label = h3("Sliders"),
        min = 0, max = 100, value = 50),
        sliderInput("slider2", "",
        min = 0, max = 100, value = c(25, 75))
    ),
    
    column(3, 
        textInput("text", label = h3("Text input"), 
            value = "Enter text..."))   
    )
))
```

```java
shinyUI(fluidPage(
  titlePanel("censusVis"),
  
  sidebarLayout(
    sidebarPanel(
      helpText("Create demographic maps with information from the 2010 US Census."),
      
      selectInput("select", label = h3("Choose a variable to display"), choices = list("percent white" = 1, "percent Black" = 2, "percent Hispanic" = 3, "percent Asian" = 4), selected = 1),

      // selectInput("select", label = h3("Choose a variable to display"), choices = list("percent white", "percent Black", "percent Hispanic", "percent Asian"), selected = "percent white"),

      sliderInput("slider", label = h3("Range of interest:"),
      min = 0, max = 100, value = c(0, 100))
    ),
    mainPanel()
  )
))
```
---

> ### Display reactive output
> This new Shiny app will need its own, new directory. Create a folder in your working directory named census-app. This is where we’ll save the ui.R and server.R files that you make in this lesson.

> Two steps to create reactive
> 1. Add an R object to your user-interface with `ui.R`
> 2. Tell Shiny how to build the object in `server.R`. The object will be creative if the code that builds it calls a widget value.

> Step1: Add an R object to the UI
```java
shinyUI(fluidPage(
  titlePanel("censusVis"),
  
  sidebarLayout(
    sidebarPanel(
      helpText("Create demographic maps with 
               information from the 2010 US Census."),
      
      selectInput("var", 
                  label = "Choose a variable to display",
                  choices = c("Percent White", "Percent Black",
                              "Percent Hispanic", "Percent Asian"),
                  selected = "Percent White"),
      
      sliderInput("range", 
                  label = "Range of interest:",
                  min = 0, max = 100, value = c(0, 100))
      ),
    
    mainPanel(
      textOutput("text1")
    )
  )
))
```

> Step2: Provide R code to build the object
>> Placing a function in `ui.R` tells Shiny where to display your object. Next, you need to tell Shiny how to build the object.

>> Do this by providing R code that builds the object in `server.R`. The code should go in the unnamed function that appears inside shinyServer in your `server.R` script.

>> The unnamed function plays a special role in the Shiny process; it builds a list-like object named `output` that contains all of the code needed to update the R objects in your app. Each R object needs to have its own entry in the list.

>> You can create an entry by defining a new element for `output` within the unnamed function, like below. The element name should match the name of the reactive element that you created in `ui.R`.

```java
shinyServer(function(input, output) {

     output$text1 <- renderText({ 
          "You have selected this"
     })
  }
)
```
> Each entry to output should contain the output of one of Shiny’s render* functions. These functions capture an R expression and do some light pre-processing on the expression. Use the render* function that corrresponds to the type of reactive object you are making.

function name | render*
--- | ---
images (saved as a link to a source file) | renderImage
plots | renderPlot
any printed output | renderPrint
data frame, matrix, other table like structures | renderTable
character strings | renderText
a Shiny tag object or HTMl | renderUI

> `output` is a list-like object that stores instructions for building the R objects in your app.

> `input` is a second list-like object. It stores the current values of all of the widgets in your app. These values will be saved under the names that you gave the widgets in `ui.R`.

> So for example, our app has two widgets, one named “var” and one named “range”, The values of “var” and “range” will be saved in input as `input$var` and `input$range`. Since the slider widget has two values (a min and a max), `input$range` will contain a vector of length two.

```java
shinyServer(
  function(input, output) {
  
    output$text1 <- renderText({ 
      paste("You have selected", input$var)
    })
  }
)
```

```java
shinyServer(function(input, output){
  output$text1 <- renderText({
    paste("You have selected", input$var)
  })
  
  output$text2 <- renderText({
    paste("Your have chosen a range that goes from", input$range[1], "to", input$range[2])
  })
})
```
---

> ### Use R scripts and data
```java
counties <- readRDS("/Users/zhengxiao/Projects/RTutorial/census-app/data/counties.rds")
head(counties)
```

> `helpers.R` is an R script that can help you make **choropleth maps**. A choropleth map is a map that uses color to display the regional variation of a variable. In this case, `helpers.R` will create `percent_map`, a function designed to map the data in `counties.rds`.

> Save helpers.R inside your census-app directory

> to install helpers.R
```java
install.packages(c("maps", "mapproj"))
```

```java
library(maps)
library(mapproj)
source("/Users/zhengxiao/Projects/RTutorial/census-app/helpers.R")
counties <- readRDS("/Users/zhengxiao/Projects/RTutorial/census-app/data/counties.rds")
percent_map(counties$white, "darkgreen", "% White")
```

```java
// Since you saved helpers.R in the same directory as server.R, you can ask Shiny to load it with

source("helpers.R")

// Since you saved counties.rds in a sub-directory (named data) of the directory that server.R is in, you can load it with.

counties <- readRDS("data/counties.rds")
```

> Take a look at the above code. To use `percent_map`, we first ran `helpers.R` with the `source` function, and then loaded `counties.rds` with the `readRDS` function. We also ran `library(maps)` and `library(mapproj)`.

> **Note**:  When Shiny runs the commands in server.R, it will treat all file paths as if they begin in the same directory as server.R. In other words, the directory that you save server.R in will become the working directory of your Shiny app.

> Shiny will execute all of these commands if you place them in your server.R script. However, where you place them in server.R will determine how many times they are run (or re-run), which will in turn affect the performance of your app.

> Here’s what we’ve learned so far:

>> * The server.R script is run once, when you launch your app
```java
shinyServer(...)
```

>> * The unnamed function inside shinyServer is run once each time a user visits your app
```java
function(input, output){...}
```

>> * The R expressions inside render* functions are run many times. Shiny runs them once each time a user changes a widget.
```java
output$map <- renderPlot({...})
```

```java
library(maps)
library(mapproj)
source("helpers.R")
counties <- readRDS("data/counties.rds")

shinyServer(function(input, output){
  output$map <- renderPlot({
    
    data <- switch(input$var, 
                   "Percent White" = counties$white,
                   "Percent Black" = counties$black,
                   "Percent Hispanic" = counties$hispanic,
                   "Percent Asian" = counties$asian)
    
    color <- switch(input$var, 
                    "Percent White" = "darkgreen",
                    "Percent Black" = "black",
                    "Percent Hispanic" = "darkorange",
                    "Percent Asian" = "darkviolet")
    
    legend <- switch(input$var, 
                     "Percent White" = "% White",
                     "Percent Black" = "% Black",
                     "Percent Hispanic" = "% Hispanic",
                     "Percent Asian" = "% Asian")
    
    percent_map(var = data, color = color, legend.title = length, max = input$range[1] , min = input$range[2])
  })
})

// more concise version
library(maps)
library(mapproj)
counties <- readRDS("data/counties.rds")
source("helpers.R")
    
    
shinyServer(
  function(input, output) {
    output$map <- renderPlot({
      args <- switch(input$var,
        "Percent White" = list(counties$white, "darkgreen", "% White"),
        "Percent Black" = list(counties$black, "black", "% Black"),
        "Percent Hispanic" = list(counties$hispanic, "darkorange", "% Hispanic"),
        "Percent Asian" = list(counties$asian, "darkviolet", "% Asian"))
        
      args$min <- input$range[1]
      args$max <- input$range[2]
  
      do.call(percent_map, args)
    })
  }
)

// ui.R
shinyUI(fluidPage(
  titlePanel("censusVis"),
  
  sidebarLayout(
    sidebarPanel(
      helpText("Create demographic maps with 
        information from the 2010 US Census."),
    
      selectInput("var", 
        label = "Choose a variable to display",
        choices = c("Percent White", "Percent Black",
          "Percent Hispanic", "Percent Asian"),
        selected = "Percent White"),
    
      sliderInput("range", 
        label = "Range of interest:",
        min = 0, max = 100, value = c(0, 100))
    ),
  
    mainPanel(plotOutput("map"))
  )
))
```
---

> ### Build reactive expressions

> example stoed in /Projects/stockVis
> check boxes and date ranges
> * a date range selector, created with `dateRangeInput`, 
> * a couple of check boxes made with `checkboxInput`. Check box widgets are simple. They return a TRUE when the check box is checked, and a FALSE when the check box is not checked.

> Reactive expression is an R expression that uses widget input and returns a value. The reactive expression will update this value whenver the original widget changes.

> To create a reactive expression use the `reactive` function, which takes an R expression surrounded by braces 

> For example, here’s a reactive expression that uses the widgets of stockVis to fetch data from Yahoo.

```java
dataInput <- reactive({
  getSymbols(input$symb, src = "yahoo", 
    from = input$dates[1],
    to = input$dates[2],
    auto.assign = FALSE)
})
```

> When you run the expression, it will run `getSymbols` and return the results, a data frame of price data. You can use the expression to access price data in `renderPlot` by calling `dataInput()`.

```java
output$plot <- renderPlot({    
  chartSeries(dataInput(), theme = chartTheme("white"), 
    type = "line", log.scale = input$log, TA = NULL)
})
```

> Reactive expressions are a bit smarter than regular R functions. They cache their values and know when their values have become outdated. What does this mean? The first time that you run a reactive expression, the expression will save its result in your computer’s memory. The next time you call the reactive expression, it can return this saved result without doing any computation (which will make your app faster).

> The reactive expression will only return the saved result if it knows that the result is up-to-date. If the reactive expression has learned that the result is obsolete (because a widget has changed), the expression will recalculate the result. It then returns the new result and saves a new copy. The reactive expression will use this new copy until it too becomes out of date.

> Let's summarize this behaviour
> * A reactive expression saves its result the first time you run it.
> * The next time the reactive expression is called, it checks if the saved value has become out of date (i.e., whether the widgets it depends on have changed).
> * If the value is out of date, the reactive object will recalculate it (and then save the new result).
> * If the value is up-to-date, the reactive expression will return the saved value without doing any computation.

```java
library(quantmod)
source("helpers.R")

shinyServer(function(input, output) {

  dataInput <- reactive({
    getSymbols(input$symb, src = "yahoo", 
      from = input$dates[1],
      to = input$dates[2],
      auto.assign = FALSE)
  })

  output$plot <- renderPlot({   
    data <- dataInput()
    if (input$adjust) data <- adjust(dataInput())

    chartSeries(dataInput(), theme = chartTheme("white"), 
      type = "line", log.scale = input$log, TA = NULL)
  })
})
```
---
> ### Sharing your apps
> Share the Shiny app as a web page. Shiny has three built-in commands that make it easy to use files that are hosted online: `runUrl`, `runGitHub`, `runGist`.

> * `runUrl`
>> `runUrl` will download and launch a Shiny app straight from a weblink.

>> To use `runRUL`:
>> * Save your Shiny app's directory as **zip** file
>> * Host that zip file at its own link on a web page. Anyone with access to the link can lauch the app fomr inside R by runing:
```java
library(shiny)
runUrl("<the weblink>")
``` 

> * `runGitHub`
> If you don't have your own web page to host the files at, you can host your files for free at www.github.com.

> To share an app through Github, create a project repository on Github. Then store your `server.R` and `ui.R` files in the repository, along with any supplementary files that the app uses.

> Your users can launch your app by running:
```java
runGitHub( "<your repository name>", "<your user name>")
```