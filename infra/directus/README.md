# Directus install notes

This repository now includes a clean Directus stack for the UpThrive content editor.

## What to do on the VPS

1. Check whether an old Directus container or stack still exists.
2. Stop/remove the old Directus stack if it is present.
3. Deploy this compose file as the new Directus instance.
4. Change the default passwords and secrets before public use.
5. Point the site to Directus later through environment variables.

## Suggested cleanup commands on the VPS

Use these only after confirming the old stack names:

```bash
docker ps -a | grep -i directus
docker stop <container>
docker rm <container>
docker volume ls | grep -i directus
```

If you find an old Coolify service, delete it in Coolify first so the ports and volumes are released cleanly.
