// Initialize the map
var map = L.map('map').setView([28.6139, 77.2090], 12); // Default view set to Delhi

// Add tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Define routes as coordinates
const routes = {
            'GL90': [
                [28.6331, 77.2198], // Start (Kendriya Terminal)
                [28.6294, 77.2158],
[28.6415, 77.2207],
[28.6401, 77.2215],
[28.6410, 77.2203],
[28.6410, 77.1864],
[28.6695, 77.1605],
[28.6640, 77.1290],
[28.6927, 77.1824],
[28.7016, 77.1504],
[28.7022, 77.1420],
[28.7091, 77.1290],
[28.7167, 77.1225],
[28.7152, 77.1162],
            [28.7151, 77.1424],

                [28.7465, 77.1139],

                // End (Rohini Sector 16)
            ],
            'GL22': [
                [28.6763, 77.2975],
[28.6457, 77.2297],
[28.6287, 77.2336],
[28.6264, 77.2382],
[28.6416, 77.2965],
[28.6510, 77.2828],
[28.6763, 77.2975],
 // End (Anand Vihar ISBT)
            ],
            'GL23': [
                [28.6860, 77.2635],
[28.6875, 77.2790],
[28.6696, 77.2845],
[28.6487, 77.2334],
[28.6652, 77.2706],
[28.6510, 77.2828],
[28.6763, 77.2975],

            ],
            'GL23Cluster': [
                [28.6832, 77.2673],
[28.6844, 77.2446],
[28.6881, 77.2908],
[28.6487, 77.2334],
[28.6552, 77.2583],
[28.6552, 77.2583],
[28.6461, 77.2370],
[28.6694, 77.2826],
[28.6713, 77.2914],
[28.6771, 77.2500],
[28.6702, 77.2733],
[28.6734, 77.2322],
[28.6764, 77.2700],
[28.6487, 77.2334],
[28.6603, 77.2719],
[28.6641, 77.2698],
[28.6712, 77.2372],
[28.6655, 77.2627],
[28.6789, 77.2770],
[28.6843, 77.2746],
[28.6525, 77.2820],
[28.6665, 77.2823],
[28.6765, 77.2910],
[28.6763, 77.2975],

            ],
            'GL32': [
                [28.6634, 77.1072],
[28.6416, 77.1623],
[28.6453, 77.1659],
[28.6396, 77.1740],
[28.6417, 77.1782],
[28.6362, 77.2194],
[28.6340, 77.2266],
[28.6322, 77.2268],
[28.6460, 77.2061],
[28.6660, 77.3064],
[28.5560, 77.3326],
[28.5934, 77.2927],
[28.5888, 77.3233],
[28.5866, 77.3246],
[28.5927, 77.3174],
[28.5846, 77.3270],
[28.5923, 77.3224],
[28.5767, 77.3042],
[28.5857, 77.3189],
[28.5828, 77.3175],
[28.5864, 77.3215],
[28.5890, 77.3048],
[28.5730, 77.3253],
[28.5805, 77.3062],

            ],
            'GL91': [
                [28.6315, 77.2113], // Start (Shivaji Stadium)
                [28.6853, 77.0605]  // End (Mundka)
            ],
            'RL-75': [
                [28.6433, 77.2207], // Start (New Delhi Railway Station Gate 2)
                [28.6024, 77.0302]  // End (Dwarka Sector 14 Metro Station)
            ],
            // Added Routes
            '33': [
            [28.6814, 77.3138], // Start (Bhajanpura)
            [28.5874, 77.3704]  // End (Noida Sector 37)
        ],
        '33A': [
            [28.5213, 77.3014], // Start (Badarpur Border)
            [28.6027, 77.3607]  // End (Shashi Chowk / Sector 36/37 Noida)
        ],
        '33C': [
            [28.7041, 77.1025], // Start (Chauhan Patti)
            [28.6462, 77.3024]  // End (Anand Vihar ISBT)
        ],
        '53': [
            [28.6791, 77.2415], // Start (Dilshad Garden Depot)
            [28.5507, 77.2811]  // End (Mayur Vihar Phase III Terminal)
        ],
        '56': [
            [28.6433, 77.2207], // Start (New Delhi Railway Station Gate 2)
            [28.5771, 77.2002]  // End (C.P.W.D. Colony Vasant Vihar)
        ],
        '70': [
            [28.6462, 77.3024], // Start (Anand Vihar ISBT)
            [28.5964, 77.1500]  // End (Naraina Vihar)
        ],
        '71': [
            [28.6737, 77.2230], // Start (ISBT / Kashmiri Gate)
            [28.5370, 77.1414]  // End (Inder Puri JJ Colony)
        ],
        '72': [
            [28.6737, 77.2230], // Start (ISBT / Kashmiri Gate)
            [28.5490, 77.0185]  // End (Najafgarh)
        ],
        '73Cluster': [
            [28.6462, 77.3024], // Start (Anand Vihar ISBT)
            [28.6585, 77.2432]  // End (Rajghat Cluster Depot)
        ],
        '78': [
            [28.6478, 77.1810], // Start (Azadpur Terminal)
            [28.5355, 77.1090]  // End (Inder Puri (Krishi Kunj))
        ],
        '81': [
            [28.6937, 77.1905], // Start (Tri Nagar Jai Mata Market)
            [28.5642, 77.1567]  // End (R.K. Puram Sector 1)
        ],
        '85': [
            [28.6585, 77.2177], // Start (Old Delhi Railway Station)
            [28.7742, 77.0861]  // End (Sultan Puri)
        ],
        '89': [
            [28.6331, 77.2198], // Start (Kendriya Terminal)
            [28.7302, 77.2002]  // End (Badli Railway Station)
        ],
        '91': [
            [28.6585, 77.2177], // Start (Old Delhi Railway Station)
            [28.6998, 77.0680]  // End (Swaroop Nagar JJ Colony GT Road)
        ],
        '92': [
            [28.6585, 77.2177], // Start (Old Delhi Railway Station)
            [28.7333, 77.1183]  // End (Rohini Sector 22)
        ],
        '100': [
            [28.6937, 77.1905], // Start (Tri Nagar Jai Mata Market)
            [28.7350, 77.0750]  // End (Narela Industrial Area E-Block)
        ],
        '100A': [
            [28.6737, 77.2230], // Start (ISBT / Kashmiri Gate)
            [28.7537, 77.1263]  // End (Mukhmel Pur)
        ],
        '101': [
            [28.6585, 77.2177], // Start (Old Delhi Railway Station)
            [28.7672, 77.0792]  // End (Bawana)
        ],
        '102': [
            [28.6354, 77.1650], // Start (Balak Ram Hospital)
            [28.6547, 77.1382]  // End (Hari Nagar Clock Tower)
        ],
        '103': [
            [28.6585, 77.2177], // Start (Old Delhi Railway Station)
            [28.6550, 77.1310]  // End (Fatehpuri)
        ],
        '104': [
            [28.6478, 77.1810], // Start (Azadpur Terminal)
            [28.7331, 77.0746]  // End (Ghoga Village)
        ],
        '105': [
            [28.6478, 77.1810], // Start (Azadpur Terminal)
            [28.7880, 77.0970]  // End (Auchandi Border)
        ],
        '106': [
            [28.7416, 77.1597], // Start (Kanjhawla Depot)
            [28.6737, 77.2230]  // End (ISBT / Kashmiri Gate)
        ],
        '107': [
            [28.6760, 77.2284], // Start (Mori Gate Terminal)
            [28.6354, 77.1746]  // End (Fatehpuri)
        ],
        '108': [
            [28.6760, 77.2284], // Start (Mori Gate)
            [28.7984, 77.0651]  // End (Narela Terminal)
        ],
        '109': [
            [28.6462, 77.3024], // Start (Anand Vihar ISBT)
            [28.7011, 77.2066]  // End (Keshav Nagar)
        ],
        '115': [
            [28.6760, 77.2284], // Start (Mori Gate Terminal)
            [28.7285, 77.0751]  // End (Katewara Village)
        ],
        '119': [
            [28.6381, 77.2517], // Start (BBM II Depot)
            [28.7032, 77.2494]  // End (Nathupura)
        ],
        '120': [
            [28.6749, 77.2235], // Start (Kamla Market)
            [28.5801, 77.3016]  // End (Shiv Vihar)
        ],
        '122': [
            [28.6728, 77.2264], // Start (Bara Hindu Rao)
            [28.6334, 77.2143]  // End (Kendriya Terminal)
        ],
        '126': [
            [28.7031, 77.1936], // Start (Inderlok Terminal)
            [28.6833, 77.2198]  // End (Chandni Chowk)
        ],
        '128': [
            [28.6354, 77.1623], // Start (Baprola Village)
            [28.6760, 77.2284]  // End (Mori Gate)
        ],
        '135': [
            [28.6600, 77.2133], // Start (Sarai Kale Khan)
            [28.6610, 77.0999]  // End (Rajpur Village)
        ],
        '137': [
            [28.6390, 77.2070], // Start (Pragati Maidan)
            [28.6760, 77.2284]  // End (Mori Gate)
        ],
        '139': [
            [28.6986, 77.1392], // Start (Nangloi)
            [28.6066, 77.2367]  // End (Bhajanpura)
        ],
        '147': [
            [28.6036, 77.2438], // Start (Dilshad Garden)
            [28.6749, 77.2235]  // End (Kamla Market)
        ],
        '148': [
            [28.6342, 77.1954], // Start (Sarai Kale Khan)
            [28.6749, 77.2235]  // End (Kamla Market)
        ],
        '155': [
            [28.6956, 77.1980], // Start (Kanjhawala)
            [28.6749, 77.2235]  // End (Kamla Market)
        ]
        };

// Variable to store current polyline
var currentPolyline = null;

// Function to focus on a route
function focusOnRoute(routeId) {
    // Clear previous polyline if exists
    if (currentPolyline) {
        map.removeLayer(currentPolyline);
        currentPolyline = null; // Ensure the polyline reference is cleared
    }

    // Check if the routeId exists
    if (routes[routeId]) {
        // Create a new polyline for the selected route
        currentPolyline = L.polyline(routes[routeId], { color: 'red' }).addTo(map);

        // Fit map bounds to the polyline
        map.fitBounds(currentPolyline.getBounds());
    } else {
        console.error('Route ID not found:', routeId);
    }
}

let routeLayer = L.layerGroup().addTo(map);

// Function to focus on route
function focusOnRoute(routeId) {
    // Clear existing route
    routeLayer.clearLayers();

    // Get route coordinates
    const coordinates = routes[routeId];

    // Check if coordinates exist
    if (coordinates) {
        // Create a polyline with dotted lines
       
       
       
       
       
        L.polyline(coordinates, {
            color: '#FF5733', // A bright color
            weight: 4, // Thicker line
            opacity: 0.7, // Slightly transparent
            dashArray: '10, 10' // Dotted line pattern
        }).addTo(routeLayer);
        
        






        // Fit the map to the new polyline
        map.fitBounds(L.polyline(coordinates).getBounds());
    } else {
        alert('Route not found.');
    }


    
}

function filterRoutes() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const routeItems = document.querySelectorAll('#routeList li');
    
    routeItems.forEach(item => {
        const routeText = item.textContent.toLowerCase();
        if (routeText.includes(searchTerm)) {
            item.style.display = ''; // Show item
        } else {
            item.style.display = 'none'; // Hide item
        }
    });
}

async function fetchRoute(coordinates) {
    const apiKey = 'your-api-key-here';
    const orsUrl = `https://api.openrouteservice.org/v2/directions/driving-car/geojson?api_key=${apiKey}`;

    const response = await fetch(orsUrl, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            coordinates: coordinates,
        }),
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.error('Error fetching route:', response.statusText);
        return null;
    }
}

function addRouteToMap(routeData, color) {
    if (routeData) {
        L.geoJSON(routeData, {
            style: {
                color: color,
                weight: 4,
                opacity: 0.7,
                dashArray: '10, 5' // For dotted lines
            }
        }).addTo(map);
    }

const routes = [
    [
        [77.216721, 28.644800], // Route 1: Point A
        [77.229509, 28.614965]  // Route 1: Point B
    ],
    [
        [77.216721, 28.644800], // Route 2: Point A
        [77.252623, 28.612923]  // Route 2: Point B
    ]
    // Add more routes as needed
];

async function displayAllRoutes() {
    for (let i = 0; i < routes.length; i++) {
        const routeData = await fetchRoute(routes[i]);
        const colors = ['blue', 'red', 'green', 'orange', 'purple'];
        const color = colors[i % colors.length];
        addRouteToMap(routeData, color);
    }
    
    // Optionally fit map to bounds of all routes
    const boundsArray = routes.map(route => L.polyline(route).getBounds());
    const combinedBounds = boundsArray.reduce((bounds, nextBounds) => bounds.extend(nextBounds), L.latLngBounds());
    map.fitBounds(combinedBounds);
}

displayAllRoutes();

}