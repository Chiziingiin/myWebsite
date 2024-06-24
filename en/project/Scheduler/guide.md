::: warning
Machine translation may contain inaccurate content
:::

# User Guide

Our software is based on Vite (Vue3) and developed using Visual Studio Code. During the design process, we referenced the functionality and operational logic of the Android app "Bit Progress". Every detail of the software has been meticulously refined, including but not limited to clear operational logic, beautiful program animations, and user interface, and personalized settings.

[[toc]]

## 1. Software Interface Introduction
Upon opening the software, you should see the following interface:
![img](/images/project-Scheduler/clip_image002.gif)

### 1. Home Page: {#t1}

The homepage is divided from top to bottom into the header control area (operation buttons, search box, calendar), main page, and bottom navigation bar.

- Click the ![img](/images/project-Scheduler/clip_image004.jpg) button to add a new entry (see [2. Add Page](#t2)).
- Click the ![img](/images/project-Scheduler/clip_image006.jpg) button to perform the following operations on existing entries: edit, archive, delete. Clicking again cancels the edit state. (See 3. Operation Page)
- The search box is used to filter existing entries and supports fuzzy search, e.g., entering “1” can match titles like 21, 13, 515, etc.
- The calendar defaults to week view. Clicking ![img](/images/project-Scheduler/clip_image008.jpg) switches to month view.
::: details View Image
![img](/images/project-Scheduler/clip_image010.gif)

Hold down the mouse and slide left or right to switch months, slide up or down to switch between week view or month view.

The first day of the current month displays the month by default, for example, February 1st is displayed as "February".

The selected day is highlighted with a blue background and white text, as shown, the 17th is the selected day.

:::

![img](/images/project-Scheduler/clip_image012.gif)

As shown in the image, this is the appearance of the software when adding four different categories of entries.

Advantages: The interface is elegant, aesthetically pleasing, rich in color, and has a clear operational logic.

![Text Box: Figure 3](/images/project-Scheduler/clip_image013.gif)

![img](/images/project-Scheduler/clip_image015.jpg)

### 2. Add Page {#t2}

(1) Clicking the ![img](/images/project-Scheduler/clip_image016.jpg) on the homepage will bring up this page.

(2) Clicking any one will jump to the corresponding add page.

(3) Clicking the blank (blurred area) will close this page.

![img](/images/project-Scheduler/clip_image018.jpg) Here, taking "Progress" as an example, the others are similar.

From top to bottom, it is divided into theme color selection, title, notes, type, progress information, and automatic archiving.

The theme color is randomly chosen from the following options:
![img](/images/project-Scheduler/clip_image020.jpg)

Enter the information and click save.

If the information is incomplete, the software will prompt you.

### 3. Operation Page {#t3}

![img](/images/project-Scheduler/clip_image022.jpg)

The first button is "Edit".

Clicking it will jump to the corresponding entry's edit page.

The second button is "Archive".

Clicking it will archive the corresponding entry.

![img](/images/project-Scheduler/clip_image024.jpg)

The third button is "Delete".

Clicking it will delete the corresponding entry (move to trash).

Additionally, when progress is completed (progress reaches 100%), if automatic archiving was checked at creation, the entry will be automatically archived.

The operation logic for the archive page and recycle bin page is roughly the same and will not be elaborated here.

For detailed operations of each category, see (Section Three).

### 4. Dark Mode {#t4}
![img](/images/project-Scheduler/clip_image026.jpg)

When you select "Follow system", the software will detect the current browser's color mode and adapt automatically.

Unchecking "Follow system" allows you to manually choose whether to enable dark mode.

![img](/images/project-Scheduler/clip_image028.jpg) The dark mode is not purely black; considering user aesthetics, colors, and gloss, we created a beautiful dark mode for a better user experience.

## 2. Basic Functionality and Usage Scenarios

### 1. Progress

Progress records the total progress value of something being completed, without daily record limitations. It ends when the total count reaches the set amount. For example, if you want to record the specific number of episodes watched in a TV series, you can create a progress record.

Progress creation is divided into three types: incremental progress, decremental progress, and total progress.

Incremental progress: Progress starts from 0. Each time you click +, it increases until it reaches the set total amount.

Decremental progress: Progress starts from the set total amount. Each time you click -, it decreases until it reaches 0.

Total progress: If you have multiple progress tasks, you can create a total progress, then create sub-progress within the total progress. The total progress will summarize all sub-progresses.

Total Amount: The total amount of progress.

Unit: The unit of measurement for the progress. For example, if you want to record TV series progress, you can set the total amount to 10 and the unit to 'episodes', so the progress description would be 10 episodes.

Increment: The specified amount added or subtracted each time you click + or -.

### 2. Counter

The counter is to count the number of times something is done, without daily and total count limits. You can manually archive if you do not want to record anymore.

Daily: Count for each day.

Weekly: Count for each week.

Monthly: Count for each month.

Unit: The unit of measurement for the count. For example, if you want to record attendance, you can set the unit to 'times', and your attendance this month might be 5 times.

Increment: The specified amount added or subtracted each time you click + or -.

### 3. Goal

Goals record the specified amount of daily check-ins. When the daily check-in amount reaches the value you set, it is ticked as completed for the day, and the corresponding goal days achieved will be +1. (To meet the needs of exceeding daily goals, even after ticking the goal, you can continue to click to check-in.)

Goals are divided into two types: single-time and recurring.

Single-time: One-time goal. When the set number of goal days is achieved, the goal is considered complete.

Recurring: The goal has no end date and can continue indefinitely.

Fixed: Default is open every day from Monday to Sunday. You can also choose specific days to open the goal. The goal cannot be operated on non-specified dates.

Currently developing weekly and monthly options.

Goal Days: Achieving the set amount each day counts as one day, until the number of goal days is reached.

Daily Amount: Set an amount to be achieved each day.

Unit: The unit of measurement for the daily amount. For example, if you want to record drinking 8 cups of water daily, you can set the unit to 'cups' and drink 8 cups today.

Increment: The specified amount added each time you click the goal circle. For example, if the increment is set to 2, each click adds 2 to the daily amount.

### 4. Focus
![img](/images/project-Scheduler/clip_image030.jpg) When you click start timing, the software begins timing, and the circular progress bar starts moving. Click stop to record it in the software.

![img](/images/project-Scheduler/clip_image032.jpg) In-progress timing appearance.

### 5. Fail-safe Design

For example, when unsaved or deleting entries, to prevent accidental touches, a prompt box will pop up.

![img](/images/project-Scheduler/clip_image034.jpg)![img](/images/project-Scheduler/clip_image036.jpg)![img](/images/project-Scheduler/clip_image038.jpg)

For example, when the user attempts to operate on future dates, corresponding processing will be done:

A small lock icon will be displayed, indicating that changes are not allowed. Users can only change entries for today and previous dates.

![img](/images/project-Scheduler/clip_image040.jpg)

::: warning Explanation

If you cannot open the software, encounter any errors during installation, or face technical issues, please first refer to the troubleshooting guide.

:::

::: info Example
When the user attempts to operate on future dates, corresponding processing will be done:
A small lock icon will be displayed, indicating that changes are not allowed. Users can only change entries for today and previous dates.
:::

::: tip Explanation
If you cannot open the software, encounter any errors during installation, or face technical issues, please first refer to the troubleshooting guide.
:::
