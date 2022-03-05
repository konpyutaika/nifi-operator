package config

var ZookeeperPropertiesTemplate = `#
#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#
#
#

initLimit=10
autopurge.purgeInterval=24
syncLimit=5
tickTime=2000
dataDir=./state/zookeeper
autopurge.snapRetainCount=30

#
# Specifies the servers that are part of this zookeeper ensemble. For
# every NiFi instance running an embedded zookeeper, there needs to be
# a server entry below. For instance:
#
# server.1=nifi-node1-hostname:2888:3888;2181
# server.2=nifi-node2-hostname:2888:3888;2181
# server.3=nifi-node3-hostname:2888:3888;2181
#
# The index of the server corresponds to the myid file that gets created
# in the dataDir of each node running an embedded zookeeper. See the
# administration guide for more details.
#

server.1=
`
