let model = {
    items: [
        { id: "1", name: "Flamingos", description: "A flamingo's plumage is a distinctive pink color with black flight feathers along the edges of the wings. It has a slender body and very long legs, a long, flexible neck and a small head. The flamingo's bill has a characteristic downward bend. Compared with its long legs, a flamingo's feet are relatively small.", image:"images/flamingo.png" },
        { id: "2", name: "Parrots", description: "All parrots have curved beaks and all are zygodactyls, meaning they have four toes on each foot, two pointing forward and two projecting backward. Most parrots eat fruit, flowers, buds, nuts, seeds, and some small creatures such as insects. Parrots are found in warm climates all over most of the world.", image:"images/parrot.png" },
        { id: "3", name: "Owls", description: "Most owls have huge heads, stocky bodies, soft feathers, short tails, and a reversible toe that can point either forward or backward. Owl's eyes face forward, like humans do. Most owl species are active at night, not in the daytime. There are about 250 species of owls in the world.", image:"images/owl.png" },
        { id: "4", name: "Pigeons ", description: "Pigeons are gentle, plump, small-billed birds with a skin saddle (cere) between the bill and forehead. All pigeons strut about with a characteristic bobbing of the head. Because of their long wings and powerful flight muscles, they are strong, swift fliers.", image:"images/pigeon.png" },
        { id: "5", name: "Albatrosses", description: "These feathered giants have the longest wingspan of any bird—up to 11 feet! The wandering albatross is the biggest of some two dozen different species. Albatrosses use their formidable wingspans to ride the ocean winds and sometimes to glide for hours without rest or even a flap of their wings.", image:"images/albatross.png" },
        { id: "6", name: "Tropicbirds ", description: "Tropicbirds range in size from 76 cm to 102 cm in length and 94 cm to 112 cm in wingspan. Their plumage is predominantly white, with elongated central tail feathers. The three species have different combinations of black markings on the face, back, and wings. Their bills are large, powerful and slightly decurved.", image:"images/seagull.png" },
    ],
    targetBird: {id: "", name:"", description: "Select bird type to see it's description", image:"images/birds.png"}

};

let birdsListApp = angular.module("birdsListApp", []);
birdsListApp.controller("birdsListController", function ($scope) {
    $scope.data = model;
    $scope.setTargetBird = function (bird) {
        {
            $scope.data.targetBird = bird;
        }
    }
});