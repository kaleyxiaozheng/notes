With tabular data, key is an independent attribute that acts as an index into the data while a dependent attribute is called a value.

key attributes can be categorical or ordinal and may be hierarchically organised.

The different values for key attributes are usually called **leves**

Value attributes can be any kind of attribute: 
> * Scatter plots
> * Bar charts and polar area charts
> * Pie charts
> * Line charts or dot charts
> * Histograms (like a bar chart) and density plots (like a line chart)
> * Box-and-whisker plots or violin plots
> * Heat maps - to show a single value attribute with two keys
> * Tree maps

tabular data is multivariate: it has more than two attributes.

Analysis of Trends and patterns
> **Smoothing** is an important way of exploring and understanding data. It can also be understood as a kind of model fitting.

> another way of summarising data is to use **clustering to group similar data items**

> Linear regression - The simplest way of smoothing data is simply to fit a straight line to it. 
>> linear model: y = (a + bx) - a is the y intercept and b is the gradient of the line.

> When fitting data it is really important to plot the data and line of best fit in order to understand the residuals.

Two ways of plotting data to check if it is normally distributed.
> 1. to look at a histogram or density plot of the data distribution and see if it looks like a normal distributeion centered around the mean.
> 2. to use a Q-Q plot. A Q-Q plot compares two probability distributions.

Data transformation
> If the data are not normally distributed then there are a number of ways to handle this.
>> 1. to use robust or non-parametric test which do not rely assumptions of normality. These typically rely on trimming the data to reduce the effect of outliers or just using values to rank the vlaue
>> 2. uniformly transform the observations to remove kurtosis or skew.

Some useful transformations are
> 1. Log transformation (log(X)) - data must be positive
> 2. Square root transformation (sqrt(X)) - data must be positive
> 3. Reciprocal transformation (1/X) 
> 4. Reverse score transformation 

Another way of summarising data or seeing patterns is to use clustering.

Clustering tries to group "similar" data items together.
> 1 hard or soft clustering 
> 2 strict or overlapping partitioning
> 3 hierarchical clustering

The basic steps in clustering analysis are 
> 1. Normalise the data if necessary. The most common approach is to use z-scores
> 2. Decide how to measure similarity between items. 
> 3. Choose the clustering method and, if required, the number of clusters.
> 4. Visualise the clusters and try to determine if they meaningful and if so what they mean.

ggplot2 is designed to create a well-structured **statistical graphics** (by layers)

```javascript
    // loading the ggplot library
    require(ggplot2)

    
```