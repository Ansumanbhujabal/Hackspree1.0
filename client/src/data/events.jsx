const events = [
    {
        title: "Non-Perishable Food Drive",
        date: "Sep 25, 2023",
        eventType: "Donation Drive",
        header: "donation-drive",
        ageRanges: ["Family-friendly", "Ages 13-18", "Adults"],
        admission: {type: "Free", cost: "", proceeds: ""},
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        location: "4968 Oakmound Road Chicago, IL 60644"

    },
    {
        title: "Colorful Futures Project Chicago Fundraiser 2023",
        date: "Sep 25, 2023",
        eventType: "Fundraiser",
        header: "fundraiser",
        ageRanges: ["Family-friendly", "Ages 13-18", "Adults"],
        admission: {type: "Free", cost: "", proceeds: ""},
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        location: "4968 Oakmound Road Chicago, IL 60644"

    },
    {
        title: "Taíno Heritage Festival",
        date: "Sep 25, 2023",
        eventType: "Heritage Celebration",
        header: "heritage-celebration",
        ageRanges: ["Family-friendly", "Ages 13-18", "Adults"],
        admission: {type: "Suggested Donation", cost: "5-15", proceeds: "Benefit the Taíno Heritage Society"},
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        location: "4968 Oakmound Road Chicago, IL 60644"

    },
    {
        title: "Lincoln Square Farmer's Market",
        date: "Sep 25, 2023",
        eventType: "Farmer's Market",
        header: "farmers-market",
        ageRanges: ["Family-friendly", "Ages 13-18", "Adults"],
        admission: {type: "Free", cost: "", proceeds: ""},
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        location: "4968 Oakmound Road Chicago, IL 60644"

    },
    {
        title: "Fellowship Covenant Church Hot Meal Night",
        date: "Sep 25, 2023",
        eventType: "Food Pantry/Hot Meals",
        header: "food-pantry-hot-meals",
        ageRanges: ["For Kids", "Family-friendly", "Ages 13-18", "Adults"],
        admission: {type: "Free", cost: "", proceeds: ""},
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        location: "4968 Oakmound Road Chicago, IL 60644"

    },
    {
        title: "Hyde Park Festival",
        date: "Sep 25, 2023",
        eventType: "Festival",
        header: "festival",
        ageRanges: ["Family-friendly", "Ages 13-18", "Adults"],
        admission: {type: "Entry Price", cost: "10", proceeds: "Proceeds go to Hyde Park Festival Cooperative and are used to pay performers, staff, and vendors."},
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        location: "4968 Oakmound Road Chicago, IL 60644"

    },
    {
        title: "Sewing Circle at Folwell West Library",
        date: "Sep 25, 2023",
        eventType: "Skill Share",
        header: "skill-share",
        ageRanges: ["Ages 13-18", "Adults"],
        admission: {type: "Suggested Donation", cost: "5-15", proceeds: ""},
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        location: "4968 Oakmound Road Chicago, IL 60644"

    },
    {
        title: "Hartigan Beach Park Cleanup",
        date: "Sep 25, 2023",
        eventType: "Service Project",
        header: "service-project",
        ageRanges: ["Ages 13-18", "Adults"],
        admission: {type: "Free", cost: "", proceeds: ""},
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        location: "4968 Oakmound Road Chicago, IL 60644"

    },
    {
        title: "Voter Registration Rally",
        date: "Sep 25, 2023",
        eventType: "Action Event",
        header: "action-event",
        ageRanges: ["Family-friendly", "Ages 13-18", "Adults"],
        admission: {type: "Free", cost: "", proceeds: ""},
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        location: "Daley Plaza, 50 W. Washington St. Chicago , IL 60602"

    },
    {
        title: "Drag Story Hour at Ericsson Heights Library",
        date: "Sep 25, 2023",
        eventType: "Entertainment",
        header: "entertainment",
        ageRanges: ["For Kids"],
        admission: {type: "Free", cost: "", proceeds: ""},
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        location: "4968 Oakmound Road Chicago, IL 60644"

    }
]


/**
 ** Types of events:
 * 
 * Donation Drive
 * Fundraiser
 * Heritage Celebration
 * Farmer's Market
 * Food Pantry/Hot Meals
 * Festival
 * Skill Share
 * Service Project
 * Action Event
 * Entertainment
 */

 /** Header images for each event */

/**
 ** Age Ranges:
 * 
 * 0 For Kids
 * 1 Family-friendly
 * 2 Ages 13-18
 * 3 Adults
 */

/**
 * Select either Free or Suggested Donation or Ticket Price
 * If there is a ticket price, list what the money will go toward
 */

/**
 ** Color coding:
 * 
 * Donation Drive => Blue 85DAFF
 * Fundraiser => Green 70E067
 * Heritage Celebration => Orange F58D3C
 * Farmer's Market => 45913E
 * Food Pantry/Hot Meals => Red DF3E08
 * Festival => Yellow FFDB21
 * Skill Share => Lilac B068A9
 * Service Project => Royal Blue 3F4AAD
 * Action Event => Gold FFAF07
 * Entertainment => Purple 8700C3
 */

export default events;