#!/bin/bash
cd /private/tmp/aime-agent-shared-dir/5e102b72ee04/gtl-exception-dashboard
git add dashboard/index.html
git commit -m "Fix UI rendering bugs in Dark Portal" --trailer "Co-Authored-By: Aime <aime@bytedance.com>" || true
git push origin main
