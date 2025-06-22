## Handle package manager - in short (apt)

- (Advance package tool) apt

```php
apt
```

## After running it we find

**Most used commands:**
`list` - list packages based on package names
`search` - search in package descriptions
`show` - show package details
`install` - install packages
`reinstall` - reinstall packages
`remove` - remove packages
`autoremove` - automatically remove all unused packages
`update` - update list of available packages
`upgrade` - upgrade the system by installing/upgrading packages
`full-upgrade` - upgrade the system by removing/installing/upgrading packages
`edit-sources` - edit the source information file
`satisfy` - satisfy dependency strings

## Lets package list in database

```php
apt list
```

## lets update database

```php
apt update
```

## lets install some package like nano editor

```php
apt install nano
```

## if want uninstall package jus write

```php
apt remove nano
```

Note: before install packages first update package database, and then install packages.

## lets open nano editor just write `nano` in terminal now its open

- for close terminal just type `ctrl + X`
- and `Y` or `N` and `Enter`
