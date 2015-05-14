#designdecisions
This document will outline every design decision made in the architecture of shoptalk.

#general architecture
MVC framework consisting of sails.js on top of node.js. The architecture is modular and each module
will be self encompassing a set of controllers, views and models.

#modules
Feed
- absorb a feed
- parse a feed and connect to social
- store a feed's contents into a db
- receive an API call associated with feed, retrieve data from cassandra and serve up parsed feed data

Models for feed:
To be documented here

Controllers for feed:
To be documented here

Views for feed:
To be documented here




Social
- Sharath to define arch here includng below.

Models for social:
To be documented here

Controllers for social:
To be documented here

Views for social:
To be documented here


DataStores
We'll use 2 datastores here, 1 for user schema, 1 for feed schema and the other for social schema, due to the ability
to work at really large scales we'll use cassandra to work on the user and feed schema and a graph store (in this case neo4j)
to store the social schema as well as ACL's associated with social.  We'll also be building a plugin inside sails to work
with the graph store and contribute this back to the community.  Initially we'll leverage the nodejs neo4j plugin to work
with the graph store.  Our architecture will reside entirely on ec2 and will have a set of ec2 nodes that act as a distributed
sails application, a set of ec2 nodes storing a distributed cassandra instance, a set of ec2 nodes that will store the
distributed neo4j instance.