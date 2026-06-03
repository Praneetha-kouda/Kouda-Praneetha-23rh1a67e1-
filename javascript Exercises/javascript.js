/**
 * LOCAL COMMUNITY EVENT PORTAL - ENGINE APPLICATION SCRIPT
 * Implements Module Tasks 1-14 sequentially.
 */

// ==========================================================================
// TASK 1: JavaScript Basics & Setup
// ==========================================================================
console.log("Welcome to the Community Portal");

window.addEventListener('load', () => {
    alert("Welcome! The Community Event Portal page is fully loaded.");
    initPortal();
});

// Mock database store representing remote endpoint values (Task 9 emulation source)
const MOCK_API_DATABASE = [
    { id: "E101", name: "Acoustic Evening in the Park", date: "2026-06-15", category: "Music", seats: 5 },
    { id: "E102", name: "AI Tech Summit 2026", date: "2026-07-22", category: "Technology", seats: 120 },
    { id: "E103", name: "Downtown Baking Masterclass", date: "2026-05-10", category: "Food & Drink", seats: 0 }, // Past/Full test case
    { id: "E104", name: "Rock & Jazz Fusion Night", date: "2026-08-05", category: "Music", seats: 25 },
    { id: "E105", name: "React Framework Deep Dive", date: "2026-09-12", category: "Technology", seats: 2 }
];

// Runtime globally filtered array copy cache
let currentEventsRegistry = [];

// ==========================================================================
// TASK 5: Objects and Prototypes
// ==========================================================================
function EventEntity(id, name, date, category, seats) {
    // TASK 10: Use let, const inside scoping parameters block context safely
    this.id = id;
    this.name = name;
    this.date = date;
    this.category = category;
    this.seats = seats;
}

// Adding method verification directly via JavaScript Object prototype chain rules
EventEntity.prototype.checkAvailability = function() {
    return this.seats > 0;
};

// ==========================================================================
// TASK 4: Functions, Scope, Closures, & Higher-Order Functions
// ==========================================================================

/**
 * Closure implementation designed to track total registrations independently across operations
 */
function createRegistrationTracker() {
    let totalCount = 0; // Lexical isolated variable scope
    return {
        increment() { totalCount++; return totalCount; },
        decrement() { if (totalCount > 0) totalCount--; return totalCount; },
        getCurrentCount() { return totalCount; }
    };
}
const portalRegistrationTracker = createRegistrationTracker();

// Reusable Higher Order filtering block passing callback function parameters (Task 4 requirement)
function filterCollection(array, callbackCondition) {
    const outputs = [];
    for(let i = 0; i < array.length; i++) {
        if(callbackCondition(array[i])) {
            outputs.push(array[i]);
        }
    }
    return outputs;
}

// ==========================================================================
// TASK 9: Async JS, Promises, Async/Await
// ==========================================================================
function fetchEventsFromMockAPI() {
    return new Promise((resolve, reject) => {
        // Simulate a 1-second network transmission delay latency loop
        setTimeout(() => {
            if (MOCK_API_DATABASE && MOCK_API_DATABASE.length > 0) {
                resolve(MOCK_API_DATABASE);
            } else {
                reject(new Error("Failed to pull dataset streams from event data servers."));
            }
        }, 1000);
    });
}

/**
 * Async wrapper containing pipeline structural operations rendering global states
 */
async function initPortal() {
    const spinner = document.getElementById('loadingSpinner');
    spinner.style.display = 'block'; // Show Loading Spinner (Task 9 requirement)
    
    try {
        // Await resolution block execution sequence safely
        const rawData = await fetchEventsFromMockAPI();
        
        // Parse and map array entries directly into structured instances
        currentEventsRegistry = rawData.map(item => new EventEntity(item.id, item.name, item.date, item.category, item.seats));
        
        // Render view content blocks 
        renderPortalView(currentEventsRegistry);
    } catch (error) {
        console.error("Initialization Interrupted:", error.message);
        document.getElementById('eventsGrid').innerHTML = `<p class="error-msg">Error: ${error.message}</p>`;
    } finally {
        spinner.style.display = 'none'; // Clear visibility footprint representation layer
    }
}

// ==========================================================================
// TASK 3, 6, & 7: Conditionals, Loops, Arrays, Methods, & DOM Manipulation
// ==========================================================================
function renderPortalView(eventsList) {
    const gridContainer = document.getElementById('eventsGrid');
    gridContainer.innerHTML = ''; // Wipe stale workspace elements

    // TASK 3: Use if-else to drop stale/past/fully loaded entities dynamically
    // Evaluates dates to ensure strict real-time relative display filtering verification checks 
    const today = new Date("2026-05-31"); 
    
    const validUpcomingEvents = filterCollection(eventsList, (event) => {
        const eventDate = new Date(event.date);
        return eventDate >= today && event.checkAvailability();
    });

    // TASK 6: Use .map() structural operations parsing components to display arrays format cards
    // Task 7: Use querySelector, createElement, and appendElement mechanisms explicitly
    validUpcomingEvents.forEach(event => {
        // TASK 10: Object Destructuring parsing properties
        const { id, name, date, category, seats } = event;

        const card = document.createElement('div');
        card.className = 'event-card';
        card.setAttribute('data-id', id);

        // TASK 2: Template Literals mapping string definitions cleanly
        card.innerHTML = `
            <h3>${name}</h3>
            <p><strong>ID:</strong> ${id}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Category:</strong> ${category}</p>
            <p class="seats ${seats <= 5 ? 'low' : ''}"><strong>Available Seats:</strong> ${seats}</p>
            <button class="select-event-btn" data-id="${id}">Register</button>
        `;
        
        gridContainer.appendChild(card);
    });

    // Output debug trace parsing schema data objects (Task 5 requirement)
    if(validUpcomingEvents.length > 0) {
        console.log("--- Current Top Active Entry Structural Matrix Map (Object.entries) ---");
        console.log(Object.entries(validUpcomingEvents[0]));
    }
    
    // Attach selection handlers to dynamically injected buttons
    attachRegistrationHookButtons();
}

// ==========================================================================
// TASK 8: Event Handling Core Hooks
// ==========================================================================
function attachRegistrationHookButtons() {
    const actionButtons = document.querySelectorAll('.select-event-btn');
    actionButtons.forEach(btn => {
        // Task 8: Click event listener targeting structural population properties assignment mapping
        btn.onclick = function(e) {
            const targetedId = e.target.getAttribute('data-id');
            document.getElementById('regEventId').value = targetedId;
            document.getElementById('fullName').focus();
            
            // Task 14: Dynamic jQuery visual effect integration (pulse target element on select)
            $(`.event-card[data-id="${targetedId}"]`).fadeOut(100).fadeIn(100);
        };
    });
}

// Task 8: onchange hook execution targeting structural layout modifications changes matching selections
document.getElementById('categoryFilter').onchange = function(e) {
    applyCombinedFilters();
};

// Task 8: keydown processing allowing immediate fluid responsive updates execution directly
document.getElementById('searchBar').onkeydown = function(e) {
    // Execute logic wrapper slightly offset to capture trailing key value alterations 
    setTimeout(() => {
        applyCombinedFilters();
    }, 10);
};

function applyCombinedFilters() {
    const selectedCategory = document.getElementById('categoryFilter').value;
    const searchString = document.getElementById('searchBar').value.toLowerCase();

    // TASK 10: Utilizing the Spread Operator to safely clone the master dataset before modifications
    const dataClone = [...currentEventsRegistry];

    // Filter using modern array processing pipelines
    let filteredResults = dataClone;

    if (selectedCategory !== 'all') {
        // Task 6: Custom Array filter operations
        filteredResults = filteredResults.filter(ev => ev.category === selectedCategory);
    }

    if (searchString.trim() !== "") {
        filteredResults = filteredResults.filter(ev => ev.name.toLowerCase().includes(searchString));
    }

    renderPortalView(filteredResults);
}

// ==========================================================================
// TASK 11, 12, & 13: Forms, AJAX, Fetch API, and Browser Tooling Debugging
// ==========================================================================
const formElement = document.getElementById('registrationForm');

formElement.addEventListener('submit', function(event) {
    // TASK 11: Prevent default submission layout behavior patterns reloads
    event.preventDefault();
    
    // TASK 13 Debug Trace Initialization Checklist Hooks
    console.log("[DEBUG HOOK] Registration submission step sequence initialized.");

    // Clear operational error flags validation layouts maps
    document.querySelectorAll('.error-msg').forEach(el => el.innerText = '');
    const statusBox = document.getElementById('submissionStatus');
    statusBox.className = 'status-box';
    statusBox.style.display = 'none';

    // TASK 11: Access form controls array parameters mapping values using form.elements array
    const targetEventId = formElement.elements['eventId'].value;
    const inputName = formElement.elements['fullName'].value.trim();
    const inputEmail = formElement.elements['email'].value.trim();

    let clientValidationErrorPresent = false;

    // Form inputs runtime client side verification checking loops
    if (!targetEventId) {
        document.getElementById('errorEventId').innerText = "Please select an event card from the list grid above.";
        clientValidationErrorPresent = true;
    }
    if (inputName.length < 3) {
        document.getElementById('errorFullName').innerText = "Full name requires a minimum criteria length of 3 letters.";
        clientValidationErrorPresent = true;
    }
    if (!inputEmail.includes('@') || inputEmail.length < 5) {
        document.getElementById('errorEmail').innerText = "Please enter a valid format email string coordinate address.";
        clientValidationErrorPresent = true;
    }

    if (clientValidationErrorPresent) {
        console.warn("[DEBUG HOOK] Client validation runtime halted transmission due to missing parameters.");
        return; 
    }

    // Construct Payload Object
    const registrationPayload = {
        eventId: targetEventId,
        registrantName: inputName,
        registrantEmail: inputEmail,
        timestamp: new Date().toISOString()
    };

    // TASK 13: Network tab inspect payload tracking verification trace output hook
    console.log("[DEBUG HOOK] Sending tracking JSON payload details body parameters to server endpoint:", registrationPayload);

    // TASK 12: Trigger mock server data transmissions routing structures configurations updates via Fetch API
    // Task 12 requirement notes: Since a localized production REST endpoint server is not built, 
    // we communicate directly with a public testing server mock gateway structure engine safely.
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(registrationPayload),
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
    })
    .then(response => {
        if (!response.ok) throw new Error("Server transmission error response protocol failed tracking check pipelines.");
        return response.json();
    })
    .then(serverData => {
        // TASK 12: Use setTimeout to simulate realistic round-trip transmission system server lag
        setTimeout(() => {
            statusBox.innerText = `Registration Confirmed! Ticket Reference ID Token Generated: RES-00${serverData.id}`;
            statusBox.className = 'status-box success';
            
            // TASK 2 & 7 UI Update operations adjustments processing modification values mapping properties:
            // Find target event element card matching updated item metrics to track changes locally
            const recordMatch = currentEventsRegistry.find(item => item.id === targetEventId);
            if(recordMatch) {
                // TASK 2: Apply unary arithmetic increment/decrement operations manipulating allocation counters
                recordMatch.seats--; // Decrement structural value counter allocations tracking registration entries
                portalRegistrationTracker.increment(); // Register inside system tracking closures records counter indicators
                console.log(`Global Registrations Handled Count: ${portalRegistrationTracker.getCurrentCount()}`);
                
                // Reparse display nodes to show updated seats metrics instantly
                applyCombinedFilters();
            }
            
            formElement.reset();
        }, 1200);
    })
    .catch(err => {
        statusBox.innerText = `System Connectivity Refused: ${err.message}`;
        statusBox.className = 'status-box error';
    });
});