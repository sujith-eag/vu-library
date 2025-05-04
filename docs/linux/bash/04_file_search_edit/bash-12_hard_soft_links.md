---
title: "Bash - 12 - Hard and Soft Links"
description: ""
summary: ""
date: 2024-12-29T16:50:24+05:30
lastmod: 2024-12-29T16:50:24+05:30
draft: false
weight: 981
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



In a file system, directories store links to files and subdirectories. 

These links are primarily categorized into **hard links** and **symbolic links** (also called soft links). Both types of links allow files to have multiple names or references, but they function in different ways.

___

### Hard Links

A **hard link** is essentially an additional directory entry that associates a file name with the same inode number. 

An **inode** is a data structure that stores information about a file, including its physical location on the disk.

#### How Hard Links Work
- A hard link consists of a file's **name** and its associated **inode number**.
- Each file and directory has at least one hard link that connects its name in the directory to the inode, which contains the pointers to the actual file data on disk.
- **Inodes** contain metadata, such as the file's size, permissions, and the physical disk block locations where the data is stored.
- A directory typically contains links to files and other directories. These links are always associated with inodes.
- A file can have multiple hard links, meaning it can be referenced by different names from different locations in the filesystem. All links point to the same inode, and thus, the same data.

#### Characteristics of Hard Links

- Hard links are efficient because they don’t require additional storage for the content of the file, only another directory entry pointing to the same inode.
- Hard links can only be created within the **same partition**. For example, a hard link in `/home` cannot point to a file in `/etc`, as these are typically separate partitions.
- Deleting one hard link does not delete the file. The file will remain in the filesystem until all hard links to it are removed.     
    Example: If a file has two hard links, the link count will be 2. Deleting one link reduces the count to 1, but the file still exists. Only when the last link is deleted does the file get removed from the filesystem.

#### Permissions with Hard Links

- When creating a hard link, it **inherits the permissions** of the original file. The link does not have its own permissions; it simply points to the same inode, which determines access.

---

### Symbolic Links (Soft Links)

A **symbolic link** (also known as a **soft link**) is a special type of file that contains a reference to another file or directory in the form of a **path**. Unlike hard links, symbolic links can span across partitions and point to files or directories located elsewhere in the filesystem.

#### How Symbolic Links Work

- A symbolic link is essentially a pointer to the **original file or directory**.
- It does not point directly to the inode of the target file; instead, it contains a **path** to the file or directory. This makes symbolic links more flexible but also less efficient than hard links.
- Symbolic links are identified by the `l` file type when viewed using the `ls -l` command.
- Symbolic links **do not increase the link count** of the original file, unlike hard links.

#### Characteristics of Symbolic Links

- Symbolic links can point to **files or directories** that are located on different partitions or even remote systems.
- If the target of a symbolic link is deleted or moved, the symbolic link becomes a **"dead link"** (i.e., a broken reference that no longer points to an existing file).
- Deleting a symbolic link **does not affect the target file or its link count**, as the symbolic link is just a reference to the target, not part of the actual file structure.

#### Permissions with Symbolic Links

- Symbolic links themselves have their own set of permissions, but they are typically not used to control access to the target file. Instead, permissions are controlled on the target file or directory.
- If a user does not have permission to access the **original file**, they won’t be able to follow the symbolic link to access it either.

---

## Creating Hard and Symbolic Links

The **`ln`** command is used to create both hard and symbolic links.
```bash {frame="none"}
ln [-s] existingfile newfile
```

- **`existingfile`**: The file that you want to create a link to.
- **`newfile`**: The new link that you want to create.
- **`-s`**: (Optional) This flag is used to create a **symbolic link**. If omitted, the link created will be a **hard link** by default.


**Creating a Hard Link**:
```bash {frame="none"}
ln file1.txt file2.txt
```

This creates a hard link `file2.txt` that points to the same inode as `file1.txt`.

**Creating a Symbolic Link**:
```bash {frame="none"}
ln -s /path/to/original/file /path/to/link
```

This creates a symbolic link pointing to `/path/to/original/file`.


---

## Key Differences Between Hard and Symbolic Links

|Feature|**Hard Link**|**Symbolic Link (Soft Link)**|
|---|---|---|
|**Reference**|Points to the same inode as the original file.|Points to the file path, not directly to the inode.|
|**Link Count**|Increases the link count of the file.|Does not affect the original file's link count.|
|**Cross-Partition Links**|Cannot span across partitions.|Can span across partitions.|
|**Target File Deletion**|File is not deleted until all hard links are removed.|If the target is deleted, the symlink becomes a dead link.|
|**Efficiency**|More efficient as it directly refers to the inode.|Less efficient due to storing the file path.|
|**File Type Representation**|Displays as a regular file.|Displays as a symbolic link (indicated by `l` in `ls -l`).|
|**Permissions**|Inherits permissions from the original file.|Has its own permissions, but does not control access to the target file.|
|**Target**|Can only link to files within the same filesystem.|Can link to files or directories across different filesystems.|

---

### Common Use Cases

#### Hard Links:

- **Backup systems**: Hard links are often used in backup systems to create multiple references to files, saving space without duplicating the data.
- **File management**: Allowing multiple names for the same file, useful in cases where you want to organize or move files but keep the same content under different names.

#### Symbolic Links:

- **Shortcut creation**: Symbolic links are commonly used to create shortcuts to files or directories. For example, in user directories or for frequently used files.
- **Redirecting files**: Symbolic links can be used to point to files that have been moved to a different location, helping maintain compatibility with existing scripts or applications.
- **Cross-partition linking**: Because symbolic links can span filesystems, they are useful for linking files across different partitions.

