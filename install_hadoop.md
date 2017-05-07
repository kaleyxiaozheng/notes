in Terminal
```javascript
    brew install hadoop
    brew update

    vi /Users/zhengxiao/.bash_profile
        export HADOOP_HOME=/usr/local/opt/hadoop/libexec/
        export PATH=$PATH:$HADOOP_HOME/bin:$HADOOP_HOME/sbin
    source /Users/zhengxiao/.bash_profile

    brew install hive
    vi /Users/zhengxiao/.bash_profile
        export HIVE_HOME=/usr/local/opt/hadoop/libexec/
        export PATH=$PATH:$HIVE_HOME/bin
        export HCAT_HOME=$HIVE_HOME/hcatalog/
    source /Users/zhengxiao/.bash_profile

    brew install pig
    vi /Users/zhengxiao/.bash_profile
        export PIG_HOME=/usr/local/opt/pig/libexec/
        export PATH=$PATH:$PIG_HOME/bin
    source /Users/zhengxiao/.bash_profile
```