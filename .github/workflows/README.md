# GitHub Actions CI/CD Setup Guide

This setup ensures code quality before deployment to Vercel.

## Workflow Overview

### 1. **Feature Branch Checks** (`feature-branch-checks.yml`)
- Runs on: Push to `feature/*` branches, `dev` branch, and pull requests to `main`
- Steps:
  - Install dependencies
  - Run ESLint checks
  - Run TypeScript build
- ✅ If passes: You can safely merge to main
- ❌ If fails: Fix issues before merging

### 2. **Main Branch Deploy** (`main-branch-deploy.yml`)
- Runs on: Push to `main` branch only
- Steps:
  1. **Check Job**: Run ESLint and build
  2. **Deploy Job**: 
     - Runs ONLY if check job succeeds
     - Deploys to Vercel
  3. **Failure Notification**: Runs if checks fail (no deployment)

## Setup Instructions

### Step 1: Set Up Branch Protection Rules

1. Go to your GitHub repository
2. Settings → Branches
3. Add rule for `main` branch:
   - Require status checks to pass before merging
   - Require branches to be up to date before merging
   - Select "Main Branch - Check & Deploy" as required check

### Step 2: Add Vercel Secrets to GitHub

1. Go to your GitHub repository
2. Settings → Secrets and variables → Actions
3. Add these secrets:

   - **VERCEL_TOKEN**: Get from Vercel → Account Settings → Tokens
   - **VERCEL_PROJECT_ID**: Get from your Vercel project settings
   - **VERCEL_ORG_ID**: Get from your Vercel team/org settings

### Step 3: Verify Workflow Files

The workflow files are already created at:
```
.github/workflows/
├── feature-branch-checks.yml
└── main-branch-deploy.yml
```

### Step 4: Test the Workflow

1. Create a feature branch: `git checkout -b feature/test`
2. Make a change and push
3. GitHub Actions will run checks automatically
4. Create a pull request to `main`
5. Once checks pass, merge to `main`
6. GitHub Actions will run checks + deploy to Vercel

## Workflow Flow

```
Feature Branch (feature/xyz)
    ↓
GitHub Actions Runs Checks (lint, build)
    ↓
✅ PASS → Safe to merge
❌ FAIL → Fix issues, don't merge yet
    ↓
Merge to Main
    ↓
GitHub Actions Runs on Main
    ├─ Check: lint & build
    │  ├─ ✅ PASS → Proceed to deploy
    │  └─ ❌ FAIL → Stop! Don't deploy (old app stays live)
    │
    └─ Deploy (only if check passes)
       ├─ ✅ PASS → New version live on Vercel
       └─ ❌ FAIL → Rollback (old app stays live)
```

## How to Know if Deployment Failed

- Check GitHub Actions tab in your repo
- Look for "Main Branch - Check & Deploy" workflow
- Red ❌ = Failed (old app is still live)
- Green ✅ = Deployed (new app is live)

## Troubleshooting

### Vercel Deployment Fails
- Check if all secrets are correctly set
- Verify `VERCEL_PROJECT_ID` and `VERCEL_ORG_ID` are correct
- Ensure your Vercel environment variables match your `.env.local`

### Checks Fail
- Review the GitHub Actions logs for specific errors
- Fix the issues locally first
- Push to feature branch to verify it works before merging

### Still Having Issues?
1. Go to Actions tab in your repo
2. Click on the failed workflow
3. See detailed logs of what went wrong
