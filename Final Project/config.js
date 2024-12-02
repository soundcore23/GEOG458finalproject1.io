var config = {
    style: 'mapbox://styles/mapbox/streets-v12',
    accessToken: 'pk.eyJ1IjoibWFwdXNlcjAzIiwiYSI6ImNtMHpzYTFiZzAyd2cyanBrYWhpYXZsZ3gifQ.paRv0YlSRjmXUZKSMTjGEA',

    markerColor: '#3FB1CE',
    // projection: 'equirectangular',
    // Read more about available projections here
    // https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, // set true for enabling 3D maps.
    auto: false,
    title: 'A journey through art in Seattle',
    byline: 'By Quinton and Aditya',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            showMarkers: true,
            title: 'Seattle is awesome!',
            image: 'images/art1.jpeg',
            description: 'Seattle is a city with a vibrant art culture. In this story map, we will visit some of the city\'s most impressive art works in the from scultpures, museums, and murals',
            location: {
                center: [
                    -122.420021,
                    47.639
                  ],
                zoom: 10.3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: function () {
                // Hide the marker when entering Chapter 1
                if (marker) {
                    marker.getElement().style.display = 'none';
                }
            },
            onChapterEnter: [
                {
                    layer: 'neighborhoods-layer',
                    opacity: 0.6,
                },
            ],
            onChapterExit: [
                // You can add other configurations here if needed for chapter exit
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            showmarkers: true,
            hidden: false,
            image: 'images/whalewins.jpeg',
            title: 'Whale Wins Mural (Wallingford)',
            description: 'Positioned on the exterior wall of the beloved restaurant Whale Wins, the mural is a whimsical and vibrant piece. The artwork seems to show the progression of different whales along with the progression of boats throughout the years, this creates an aquatic theme that fits with Seattle’s marine culture. This mural not only serves as a memorable landmark but also complements the restaurant’s focus on fresh, seasonal, and locally inspired cuisine. It’s a favorite photo spot for locals and visitors alike, offering a perfect intersection of art, community, and culinary excellence in the city. As someone who has been to this restaurant many times it is one of my favorites and staple of Seattle! The mural was created by Kyler Martz who is an illustrator and tattooer based out of the Pacific Northwest.',
            location: {
                center: [-122.3425, 47.6496],
                zoom: 17,
                pitch: 35,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            onChapterEnter: [],
            onChapterExit: [
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Greetings From Seattle Mural (SODO)',
            image: 'images/greetings.jpeg',
            description: 'Created by artists Victor Ving and Lisa Beggs as part of their nationwide “Greetings Tour,” the mural features their  iconic signature postcard-style design. Each letter of “Seattle” is filled with unique illustrations representing the city’s most famous landmarks. From the Space Needle and Mount Rainier to a nod to Seattle’s coffee culture and its maritime heritage, the mural paints a vivid picture of what makes the city special. The bold colors and retro typography make it a striking addition to the urban landscape, once again drawing both locals and tourists to take photos and celebrate their connection to the Emerald City. The mural is a testament to Seattle’s mix of grit and charm, bridging the past and present in a single captivating snapshot. This is a Seattle staple and one that I think everyone should go see!',
            location: {
                center: [-122.3508446178508,
                    47.620466188131644
                  ],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'pokemon-points-layer',
                    opacity: 1
                },
                {
                    layer: 'lawns-polygon-layer',
                    opacity: 0 
                },
                {
                    layer: 'nopoke-layer',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'fourth_identifier',
            alignment: 'left',
            rotateAnimation: true,
            hidden: false,
            title: 'Seattle Art Museum (Downtown)',
            image: 'images/seattlemus.jpg',
            description: 'The Seattle Art Museum (SAM) is a cultural hub known for its dynamic exhibitions and diverse permanent collections spanning modern, contemporary, and traditional works. Highlights include indigenous Pacific Northwest art and iconic pieces like Alexander Calder\'s Eagle. Also outside, the towering Hammering Man sculpture by Jonathan Borofsky symbolizes labor and perseverance. Inside, galleries showcase global art, from ancient artifacts to groundbreaking contemporary pieces, alongside rotating special exhibitions. With its inspiring exhibits and proximity to the Olympic Sculpture Park, SAM is a cornerstone of Seattle’s vibrant arts scene.',
            location: {
                center: [-122.3379536111046,47.60754865167318
                  ],
                zoom: 17,
                pitch: 35,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'fifth_identifier',
            alignment: 'left',
            rotateAnimation: false,
            hidden: false,
            title: 'Seattle’s Museum of Pop Culture (Seattle Center)',
            image: 'images/pop copy.jpg',
            description: 'Another Seattle staple, the MoPOP, is an immersive tribute to creativity and innovation in music, film, gaming, and more. Housed in a striking Frank Gehry-designed building, MoPOP’s architecture alone is a visual experience, with its colorful, flowing facade inspired by rock music. This museum features things from traditional art, to music, to an indie game revolution exhibit going on right now. This was one of my favorite museums to visit as a child and it is one of my favorites now as well. Overall it is an amazing experience and the MoPOP blends pop culture history with hands-on exploration, making it a must-visit destination for fans of art, media, and innovation. It’s more than a museum - it’s a celebration of the imagination that shapes our shared culture!',
            location: {
                center: [-122.34816741834078, 47.621670390075955
                  ],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'sixth_identifier',
            alignment: 'left',
            rotateAnimation: true,
            hidden: false,
            title: 'Waiting for the Interurban (Fremont)',
            image: 'images/interurban.jpeg',
            description: 'Waiting for the Interurban is a beloved public sculpture created by artist Richard Beyer in 1978, the piece features a group of six human figures and a dog, all cast in aluminum, standing as if waiting for a trolley that no longer runs. The sculpture has become a canvas for community expression, with locals regularly adorning the figures with seasonal decorations, costumes, or messages. This playful interaction has made it a dynamic and ever-changing symbol of Fremont’s quirky, artistic spirit. Located near the Fremont Bridge, Waiting for the Interurban is both a whimsical tribute to Seattle’s transit history and a celebration of the neighborhood’s creativity and sense of humor. This is one that I would pass almost every day on my way to school when I was younger so it holds a special place in my heart and I would bet you could go visit it now and see it decked out in Christmas attire!',
            location: {
                center: [-122.3555901001193,
                    47.615260143355385
                  ],
                zoom: 17,
                pitch: 35,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh_identifier',
            alignment: 'left',
            rotateAnimation: true,
            hidden: false,
            title: 'Freemont Troll (Fremont)',
            image: 'images/troll.jpeg',
            description: 'The Fremont Troll is another iconic public art installation beneath the Aurora Bridge in Seattle\'s Fremont neighborhood same as the one above! Created in 1990 by sculptors Steve Badanes, Will Martin, Donna Walter, and Ross Whitehead, the troll was the winning entry in an art competition aimed at revitalizing the area beneath the bridge. Standing 18 feet tall, the troll is a whimsical yet imposing figure with a shaggy concrete exterior that scared me as a child. It clutches a real Volkswagen Beetle in one of its massive hands, as though it had plucked it from the streets above. The vehicle was initially included as a nod to the bridge\'s car traffic, further adding to the troll\'s quirky charm. Inspired by Norse mythology and fairy tales, the Fremont Troll has become a beloved Seattle landmark. It attracts tourists, photographers, and locals alike who just like I have many times, climb on its massive arms or pose for pictures. Over the years, the troll has also served as a backdrop for cultural events and Halloween gatherings, cementing its role as a symbol of Fremont\'s offbeat, creative spirit.',
            location: {
                center: [-122.34749720679389, 47.65107868528809
                  ],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            hidden: true,
            location: {
                center: [
                    -122.335167,
                    47.608013
        ],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: []
        }
    ]
};

