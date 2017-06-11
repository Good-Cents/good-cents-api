# Good Cents: API

Good Cents is an app that allows a user to collect the 'spare change' from their credit card transactions and reallocate it toward a goal or charitable donation each week, or each month. 

## MVP Specs

### Features
* Set a bank account to collect the 'spare change' (rounding up to the next dollar) from transactions
* Allow users to cash out spare change against goals or possibly pause collection for time period
* Users can allocate change to two types of cash outs: 
  1. Donation Driven: Calculate your spare change over a set time period, and use that allocated money toward a charity or other cause.
  2. Goal Driven: Set a specific goal amount and/or purpose that your spare change is going towards, either a new goal or an existing goal in your Simple account.

### Data Shapes
* Server (models):
  * User(s)
  * Account(s)
  * Goals
  * Transactions
  * Contributions/Donations
* Client (components):
  * Spare Change counter
  * Goal progress bars
  * "Add To Goal" buttons - when hovering over, would raise goal bars with amount of spare change.
  * "Donate Now" button - takes you to a donation page
    * MVP: Dropdown list: Choose what and how much you want to allocate towards a goal or donation.
  * Transaction Log: Transation and change stored from transaction
  * STRETCH: Allow users to choose what transactions they're skimming change from.

### Technical Stack
* React
* Redux
* Node
* SCSS
* Express

### Third Party APIs:
* Plaid
* Synapsepay
* Web script for donations

## Team
* Keeley Hammond
* Ivy Patton
* Chris Wallace

## Special Thanks
To our friends and families, the team at Code Fellows, Marty Nelson and many more.
