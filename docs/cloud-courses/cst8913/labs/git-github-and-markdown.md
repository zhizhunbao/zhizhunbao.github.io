---
title: "Git, GitHub and Markdown"
description: "CST8913 Cloud Migration, lab 1: Git, GitHub and Markdown. Exam-style questions answered with my lab work."
ms.date: 2026-10-19
---

# Git, GitHub and Markdown

Lab 1 of CST8913 Cloud Migration (week 1): create a private repository, work on a branch, commit, push, open a pull request and write Markdown. Each concept below has its own section with the questions it raises, answered with what I wrote in my lab.

## Concepts to understand

1. [Git and GitHub](#1-git-and-github)
2. [working tree and staging area](#2-working-tree-and-staging-area)
3. [commit](#3-commit)
4. [Git commands](#4-git-commands)
5. [branch](#5-branch)
6. [push](#6-push)
7. [pull request](#7-pull-request)
8. [merge](#8-merge)
9. [fork](#9-fork)

## 1. Git and GitHub

#### What is the difference between Git and GitHub?

**Git** is a distributed version-control system. It runs on my own computer and records the history of a project as a series of commits, so I can see what changed, when it changed, and go back to any earlier state. Because every clone contains the full history, Git keeps working without a network connection.

**GitHub** is a hosting service built around Git. It stores a copy of the repository on a server so the work can be shared, backed up, and reviewed. Features such as pull requests, issues, and collaborator permissions live on GitHub rather than in Git itself — Git tracks the changes, GitHub is where a team discusses and coordinates them.

Explained in [1. Pro Git: getting started](../lectures/pro-git-getting-started.md), [2. GitHub Docs: collaborating with pull requests](../lectures/github-docs-collaborating.md).

## 2. Working tree and staging area

#### What are the working tree, the staging area and the repository, and how does a change move through them?

A commit moves through three areas before it becomes part of the history:

- **Working directory** — the files as they exist on disk
  - modified files are shown in red by `git status`
- **Staging area** — what will go into the next commit
  - files move here with `git add`
  - `git status` shows them in green
- **Repository** — the committed history
  - `git commit` moves the staged snapshot here

Explained in [1. Pro Git: getting started](../lectures/pro-git-getting-started.md).

## 3. Commit

#### What does a commit record?

Git tracks three things about every commit:

- a snapshot of the tracked files;
- metadata such as author, timestamp, and message; and
- a pointer to the parent commit, which is what turns the commits into a history.

Explained in [1. Pro Git: getting started](../lectures/pro-git-getting-started.md).

#### Why commit in small stages rather than once at the end?

5. **Wrote the report in stages.** I committed after each section, so the history shows how the report grew.

Explained in [1. Pro Git: getting started](../lectures/pro-git-getting-started.md).

#### How does GitHub decide which account a commit belongs to?

> GitHub attributes a commit to an account by matching the commit's email address. My GitHub account is registered with my Algonquin student email, which is its verified primary address, so the same address is used for every commit in this repository.

Explained in [1. Pro Git: getting started](../lectures/pro-git-getting-started.md).

## 4. Git commands

#### Which everyday Git commands move work from the working tree to the remote repository, and what does each one do?

| Command        | Purpose                                                                          | Example                                   |
| -------------- | -------------------------------------------------------------------------------- | ----------------------------------------- |
| `git status` | Displays the working-tree status: which files are modified, staged, or untracked | `git status`                            |
| `git add`    | Stages changes so they are included in the next commit                           | `git add lab-01/README.md`              |
| `git commit` | Records the staged snapshot in the repository history                            | `git commit -m "Add Markdown examples"` |
| `git switch` | Changes the checked-out branch;`-c` creates it first                           | `git switch -c lab-01`                  |
| `git push`   | Uploads local commits to the remote repository                                   | `git push -u origin lab-01`             |

Explained in [1. Pro Git: getting started](../lectures/pro-git-getting-started.md).

## 5. Branch

#### Why do the work on a branch instead of directly on main?

4. **Created a working branch** so that the lab work stayed off `main` until it was reviewed:

   ```bash
   git switch -c lab-01
   ```

Explained in [2. GitHub Docs: collaborating with pull requests](../lectures/github-docs-collaborating.md).

## 6. Push

#### What does pushing a branch do?

6. **Pushed the branch** to GitHub so the work existed remotely as well as locally:

   ```bash
   git push -u origin lab-01
   ```

Explained in [1. Pro Git: getting started](../lectures/pro-git-getting-started.md).

## 7. Pull request

#### What is a pull request for, and what happens when you merge it?

6. **Pushed the branch and opened a pull request.** The pull request let me review every change in **Files changed** before merging it into `main`.

Explained in [2. GitHub Docs: collaborating with pull requests](../lectures/github-docs-collaborating.md).

## 8. Merge

#### What steps take a change from a pull request into main?

7. **Opened a pull request** titled `Complete Lab 1` from `lab-01` into `main`, reviewed the **Files changed** tab, and merged it.
8. **Verified the result** by opening `lab-01/README.md` on the `main` branch on GitHub and confirming that every element rendered correctly.

Explained in [2. GitHub Docs: collaborating with pull requests](../lectures/github-docs-collaborating.md).

## 9. Fork

#### What is a fork?

1. **Read the instructions.** The course repository is private, so I forked it to read Lab 1. This showed me that a fork is a copy on GitHub, not on my computer.

Explained in [2. GitHub Docs: collaborating with pull requests](../lectures/github-docs-collaborating.md).
