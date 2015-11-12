# Problem

When trying to use Velocity & Astronomy together, it raises `Error: Custom EJSON type Astronomy is not defined`.

# Scenario

A minimal reproducible scenario can be found at https://github.com/zvictor/astronomy-EJSON-bug.
Velocity uses Meteor's `methods` and `calls` to transfer data.

# Debugging
* In normal server/client & methods/calls operations everything works fine.

<img width="241" alt="screen shot 2015-11-12 at 12 01 21" src="https://cloud.githubusercontent.com/assets/181076/11116910/fc862d90-8935-11e5-9ef0-fb55160afc51.png">

* While in Velocity, the server fetches the right data and fail right after, when trying to send it to the client (nodejs in this case).

![screen shot 2015-11-12 at 12 01 58](https://cloud.githubusercontent.com/assets/181076/11116912/00f7ef80-8936-11e5-9a2a-4c9fa715af26.png)


----


**Note**: It seems to be more a problem in Velocity than in Astronomy, but I couldn't find the Velocity's issue page to post it there. =/

**Related**: [jagi/meteor-astronomy#187](https://github.com/jagi/meteor-astronomy/issues/187)
