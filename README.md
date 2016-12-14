# GHI's Client JS library

## Description

This library contains all of GHI's platform independent code. This includes items such as services, beans, and utils.

## Overview

### Beans

The beans folder contains items that are know as Beans in Java parlance. The name was picked for uniformity and for how each of the classes are used.
Beans in Java are serializable, have no arguments on the constructor, and expose access to getter and setter methods. Since this project uses MobX for state
management the getters and setters are inherently apart of the class properties. If you are unfamiliar with beans these translate somewhat to the concept of models in some popular front-end MVC frameworks.

### Services

Services contain encapsulated logic for Beans and possibly other Domain Objects. These can include fetching this logic from the server and discrete encapsulated logic in a method or function.

### Utils

Any functions that we may need for formatting, manipulating, or refining data.

## Getting Started

Make sure that you have node and npm installed.

**NOTE: If you are using yarn you can substitute any instances of npm with yarn**

Clone the repository and run:

```
npm install
```

To run a single compile:

```
npm run compile
```

To compile on changes
```
npm run compile:watch
```

## Developing

This repo is not a stand alone repository it is meant to be consumed by other repositories. To get setup in active development you should link this project to the project you are consuming it with. For example the ghi-webapp. To set this project up do the following:

Navigate to the project directory that will be using it. Next link the directory where the ghi-client-js is on your local machine:
```
npm link ../../path/to/ghi-client-js
```

Now you should be able to start both projects and see the changes live.

## Making changes

For all pushes, it is recommended you set **push.default** to **simple** so branch names are (safely) implied

```
git config --global push.default simple
```

Check the documentation for more details

There are two modes of development depending on your level of experience

## Fork and PR
A developer forks the repository to their own account. For each new unit of work you will create branch based off master

#### Keeping your master branch up to date.

**Always Keep your master branch clean!!!** This is very important in order to cleanly merge changes from upstream.

Run the following command in the repo directory:

```
git remote add upstream https://github.com/ghiglobal/ghi-client-js.git
```

So you have access to ghiglobal's repo from your personal repository.

When you want to do an update, perform the following either in sequence or in a shell script/alias

```
git checkout master
git fetch upstream master
git merge upstream/master
git push origin master
git checkout -
```

if you have pending changes in your local branch and don't want to commit, wrap the preceding with the following:


```
git stash
{above calls here}
git stash pop
```

Now you have an updated master branch. From there you can merge any changes into a feature branch or start a new branch based off master with:

```
git checkout -b foo master
```

Which creates a new branch 'foo' which is based on the current state of master

After committing changes to 'foo', you will push to the branch to your fork with

```
git push
```

From there would you submit a pull request for your new branch. **Make sure you squash your commits!**

## Pushing to master directly

Consider this to be as if you were given sudo su - root powers on a linux machine. This is given to those with a proven track record of writing reliable, well-tested, and well-written code.

You can either clone the repository directly or fork your own and add the upstream remote as described above in the Fork/PR workflow.

### Branching

It is still recommended that you use a branch to do work for more efficient task switching and avoid conflicts when pulling changes into your local repository.

The general workflow would be (if on master):

```
git pull
git checkout -b myFeature master
```

After making changes to the code, and committed to the branch and ready to push, do:

```
git push upstream HEAD:master
```

Which will push your branch into master directly. If you have conflicts, simply update the master branch and rebase/merge into your feature branch, and try again

### Cloning ghiglobal's copy

Cloning upstream is an option you are proficient enough in working with git branches.
