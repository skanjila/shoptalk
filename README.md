# shoptalk
A repository for all shoptalk architecture.  Shoptalk will contain code related to having a realtime json feed and have capabilities to process that feed.
The code will be broken up into MVC patterned architecture, the model will use cassandra to serve up feed contents, the controller will parse the feed and return results to the view

Directory Structure:
1) Given that we are moving forward with sails.js the api directory contains the high level organization for the project,
underneath we have adapters which will perform transformations, controllers which take in requests and perform some business logic,
policies related to rules inside the app and services which invoke other services .  The config directory contains all
configurations associated with database connectivity and configs for hooks into feeds eventually.  The views contain some
stub code but will eventually contain views localized and device independent.

# Local Development Instructions
* Download and Install [node.js](https://nodejs.org/download/)
* Download Cassandra - [cassandra](http://www.apache.org/dyn/closer.cgi?path=/cassandra/2.0.14/apache-cassandra-2.0.14-bin.tar.gz)
* Extract the above archive and start Cassandra as admin/sudo (in "bin" directory, cassandra.bat/cassandra)
* Clone this git repo `git clone git@github.com:skanjila/shoptalk.git`
* Navigate to the cloned directory on your machine, and execute the following commands:

```bash
sudo npm install sails --g
npm install
sails lift
```
* Sails starts-up on port 1337, navigate to [homepage](http://localhost:1337/)
