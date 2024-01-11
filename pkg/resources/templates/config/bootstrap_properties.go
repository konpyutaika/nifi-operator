package config

var BootstrapPropertiesTemplate = `#
# Licensed to the Apache Software Foundation (ASF) under one or more
# contributor license agreements.  See the NOTICE file distributed with
# this work for additional information regarding copyright ownership.
# The ASF licenses this file to You under the Apache License, Version 2.0
# (the "License"); you may not use this file except in compliance with
# the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

# Java command to use when running NiFi
java=java

# Username to use when running NiFi. This value will be ignored on Windows.
run.as=

# Preserve shell environment while runnning as "run.as" user
preserve.environment=false

# Configure where NiFi's lib and conf directories live
lib.dir=./lib
conf.dir=./conf

# How long to wait after telling NiFi to shutdown before explicitly killing the Process
graceful.shutdown.seconds=20

# Disable JSR 199 so that we can use JSP's without running a JDK
java.arg.1=-Dorg.apache.jasper.compiler.disablejsr199=true

# JVM memory settings
java.arg.2=-Xms{{.JvmMemory}}
java.arg.3=-Xmx{{.JvmMemory}}

# Enable Remote Debugging
#java.arg.debug=-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=8000

# allowRestrictedHeaders is required for Cluster/Node communications to work properly
java.arg.5=-Dsun.net.http.allowRestrictedHeaders=true
java.arg.6=-Djava.protocol.handler.pkgs=sun.net.www.protocol

#Set headless mode by default
java.arg.14=-Djava.awt.headless=true

# Root key in hexadecimal format for encrypted sensitive configuration values
nifi.bootstrap.sensitive.key=

# Sensitive Property Provider configuration

# HashiCorp Vault Sensitive Property Providers
#nifi.bootstrap.protection.hashicorp.vault.conf=./conf/bootstrap-hashicorp-vault.conf

# AWS Sensitive Property Providers
#nifi.bootstrap.protection.aws.conf=./conf/bootstrap-aws.conf

# Azure Key Vault Sensitive Property Providers
#nifi.bootstrap.protection.azure.keyvault.conf=./conf/bootstrap-azure.conf

# GCP KMS Sensitive Property Providers
#nifi.bootstrap.protection.gcp.kms.conf=./conf/bootstrap-gcp.conf

# Sets the provider of SecureRandom to /dev/urandom to prevent blocking on VMs
java.arg.15=-Djava.security.egd=file:/dev/urandom

# Requires JAAS to use only the provided JAAS configuration to authenticate a Subject, without using any "fallback" methods (such as prompting for username/password)
# Please see https://docs.oracle.com/en/java/javase/17/security/single-sign-using-kerberos-java1.html, section "EXCEPTIONS TO THE MODEL"
java.arg.16=-Djavax.security.auth.useSubjectCredsOnly=true

# Zookeeper 3.5 now includes an Admin Server that starts on port 8080, since NiFi is already using that port disable by default.
# Please see https://zookeeper.apache.org/doc/current/zookeeperAdmin.html#sc_adminserver_config for configuration options.
java.arg.17=-Dzookeeper.admin.enableServer=false

# The following options configure a Java Agent to handle native library loading.
# It is needed when a custom jar (eg. JDBC driver) has been configured on a component in the flow and this custom jar depends on a native library
# and tries to load it by its absolute path (java.lang.System.load(String filename) method call).
# Use this Java Agent only if you get "Native Library ... already loaded in another classloader" errors otherwise!
#java.arg.18=-javaagent:./lib/aspectj/aspectjweaver-1.9.20.1.jar
#java.arg.19=-Daj.weaving.loadersToSkip=sun.misc.Launcher$AppClassLoader,jdk.internal.loader.ClassLoaders$AppClassLoader,org.eclipse.jetty.webapp.WebAppClassLoader,\
#            org.apache.jasper.servlet.JasperLoader,org.jvnet.hk2.internal.DelegatingClassLoader,org.apache.nifi.nar.NarClassLoader
# End of Java Agent config for native library loading.

# The following entry is needed in Java 21 because some libraries invoke
# reflective calls that Java no longer considers allowed by default.
# https://docs.oracle.com/en/java/javase/16/migrate/migrating-jdk-8-later-jdk-releases.html#GUID-7BB28E4D-99B3-4078-BDC4-FC24180CE82B
# This may need to be modified if additional reflective access is needed by certain libraries
# This is only known to be needed for the Hive3 processors as of now.
java.arg.20=--add-opens=java.base/java.net=ALL-UNNAMED

###
# Notification Services for notifying interested parties when NiFi is stopped, started, dies
###

# XML File that contains the definitions of the notification services
notification.services.file=./conf/bootstrap-notification-services.xml

# In the case that we are unable to send a notification for an event, how many times should we retry?
notification.max.attempts=5

# Comma-separated list of identifiers that are present in the notification.services.file; which services should be used to notify when NiFi is started?
#nifi.start.notification.services=email-notification

# Comma-separated list of identifiers that are present in the notification.services.file; which services should be used to notify when NiFi is stopped?
#nifi.stop.notification.services=email-notification

# Comma-separated list of identifiers that are present in the notification.services.file; which services should be used to notify when NiFi dies?
#nifi.dead.notification.services=email-notification

# The first curator connection issue is logged as ERROR, for example when NiFi cannot connect to one of the Zookeeper nodes.
# Additional connection issues are logged as DEBUG until the connection is restored.
java.arg.curator.supress.excessive.logs=-Dcurator-log-only-first-connection-issue-as-error-level=true

# Port used to listen for communications from NiFi. If this property is missing, empty, or 0, a random ephemeral port is used.
nifi.bootstrap.listen.port=0
`
