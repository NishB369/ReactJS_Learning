import React from "react";
import ReactDOM from "react-dom/client";

let headerStyling = {
  backgroundColor: "orange",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 100px",
};

let liStyle = {
  marginRight: "30px",
  cursor: "pointer",
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-ctr">
        <img
          width={"40px"}
          height={"40px"}
          src="https://www.svgrepo.com/show/490738/food-restaurant.svg"
        />
      </div>

      <div className="nav-bar">
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <li style={liStyle}>Home</li>
          <li style={liStyle}>About</li>
          <li style={liStyle}>Contact</li>
          <li style={liStyle}>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="search-bar">
      <textarea placeholder="Search your food here..."></textarea>
      <button>Search</button>
    </div>
  );
};

const Card = (props) => {
    const {resData} = props
    const {cloudinaryImageId, name, costForTwo} = resData.info
  return (
    <div className="card">
      <img
        className="food-img"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}
      />
      <p className="food-title">{name}</p>
      <p className="food-desc">{costForTwo}
      </p>
      <div className="btn-ctr">
        <div className="more-btn btn">More</div>
        <div className="add-btn btn">Add</div>
      </div>
    </div>
  );
};

let dataList = 
  // {
  //   "card": {
  //     "card": {
  //       "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  //       "info": {
  //         "id": "336829",
  //         "name": "Onesta",
  //         "cloudinaryImageId": "2f2a8e30d98db46c6507105f68151cf9",
  //         "locality": "Munnekollal",
  //         "areaName": "Marathahalli",
  //         "costForTwo": "₹200 for two",
  //         "cuisines": [
  //           "Italian",
  //           "Desserts",
  //           "Pizzas",
  //           "American",
  //           "Snacks"
  //         ],
  //         "avgRating": 3.7,
  //         "parentId": "11785",
  //         "avgRatingString": "3.7",
  //         "totalRatingsString": "12K+",
  //         "promoted": true,
  //         "adTrackingId": "cid=21409098~p=0~adgrpid=21409098#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=336829~eid=1d1b2a00-b719-44b4-b687-7ac350fa8a8b~srvts=1732922214923~collid=83631",
  //         "sla": {
  //           "deliveryTime": 48,
  //           "lastMileTravel": 12,
  //           "serviceability": "SERVICEABLE",
  //           "slaString": "45-50 mins",
  //           "lastMileTravelString": "12.0 km",
  //           "iconType": "ICON_TYPE_EMPTY"
  //         },
  //         "availability": {
  //           "nextCloseTime": "2024-11-30 05:00:00",
  //           "opened": true
  //         },
  //         "badges": {
  //           "textExtendedBadges": [
  //             {
  //               "iconId": "guiltfree/GF_Logo_android_3x",
  //               "shortDescription": "options available",
  //               "fontColor": "#7E808C"
  //             }
  //           ]
  //         },
  //         "isOpen": true,
  //         "type": "F",
  //         "badgesV2": {
  //           "entityBadges": {
  //             "textBased": {
                
  //             },
  //             "imageBased": {
                
  //             },
  //             "textExtendedBadges": {
  //               "badgeObject": [
  //                 {
  //                   "attributes": {
  //                     "iconId": "guiltfree/GF_Logo_android_3x",
  //                     "description": "",
  //                     "shortDescription": "options available",
  //                     "fontColor": "#7E808C"
  //                   }
  //                 }
  //               ]
  //             }
  //           }
  //         },
  //         "aggregatedDiscountInfoV3": {
  //           "header": "60% OFF",
  //           "subHeader": "UPTO ₹120",
  //           "logoCtx": {
  //             "text": "BENEFITS"
  //           }
  //         },
  //         "orderabilityCommunication": {
  //           "title": {
              
  //           },
  //           "subTitle": {
              
  //           },
  //           "message": {
              
  //           },
  //           "customIcon": {
              
  //           },
  //           "commsStyling": {
              
  //           }
  //         },
  //         "differentiatedUi": {
  //           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           "differentiatedUiMediaDetails": {
  //             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //             "lottie": {
                
  //             },
  //             "video": {
                
  //             }
  //           }
  //         },
  //         "reviewsSummary": {
            
  //         },
  //         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         "restaurantOfferPresentationInfo": {
            
  //         },
  //         "externalRatings": {
  //           "aggregatedRating": {
  //             "rating": "4.0",
  //             "ratingCount": "5.1K+"
  //           },
  //           "source": "GOOGLE",
  //           "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
  //         },
  //         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //         "campaignId": "21409098"
  //       },
  //       "analytics": {
          
  //       },
  //       "cta": {
  //         "link": "swiggy://menu?restaurant_id=336829&source=collection&query=Pizza",
  //         "text": "RESTAURANT_MENU",
  //         "type": "DEEPLINK"
  //       },
  //       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
  //     },
  //     "relevance": {
  //       "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
  //       "sectionId": "MENU_RETURN_FOOD"
  //     }
  //   }
  // },
  // {
  //   "card": {
  //     "card": {
  //       "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  //       "info": {
  //         "id": "573190",
  //         "name": "Olio - The Wood Fired Pizzeria",
  //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/0241ba5b-1a3c-466e-8eb3-3179609f92da_573190.jpg",
  //         "locality": "Varthur Main Road",
  //         "areaName": "Whitefield",
  //         "costForTwo": "₹300 for two",
  //         "cuisines": [
  //           "Pizzas",
  //           "Italian"
  //         ],
  //         "avgRating": 4.3,
  //         "parentId": "11633",
  //         "avgRatingString": "4.3",
  //         "totalRatingsString": "2.6K+",
  //         "sla": {
  //           "deliveryTime": 23,
  //           "lastMileTravel": 2.1,
  //           "serviceability": "SERVICEABLE",
  //           "slaString": "20-25 mins",
  //           "lastMileTravelString": "2.1 km",
  //           "iconType": "ICON_TYPE_EMPTY"
  //         },
  //         "availability": {
  //           "nextCloseTime": "2024-11-30 05:00:00",
  //           "opened": true
  //         },
  //         "badges": {
  //           "imageBadges": [
  //             {
  //               "imageId": "newg.png",
  //               "description": "Gourmet"
  //             }
  //           ]
  //         },
  //         "isOpen": true,
  //         "type": "F",
  //         "badgesV2": {
  //           "entityBadges": {
  //             "textBased": {
                
  //             },
  //             "imageBased": {
  //               "badgeObject": [
  //                 {
  //                   "attributes": {
  //                     "imageId": "newg.png",
  //                     "description": "Gourmet"
  //                   }
  //                 }
  //               ]
  //             },
  //             "textExtendedBadges": {
                
  //             }
  //           }
  //         },
  //         "aggregatedDiscountInfoV3": {
  //           "header": "₹125 OFF",
  //           "subHeader": "ABOVE ₹249",
  //           "discountTag": "FLAT DEAL",
  //           "logoCtx": {
  //             "text": "BENEFITS"
  //           }
  //         },
  //         "orderabilityCommunication": {
  //           "title": {
              
  //           },
  //           "subTitle": {
              
  //           },
  //           "message": {
              
  //           },
  //           "customIcon": {
              
  //           },
  //           "commsStyling": {
              
  //           }
  //         },
  //         "differentiatedUi": {
  //           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           "differentiatedUiMediaDetails": {
  //             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //             "lottie": {
                
  //             },
  //             "video": {
                
  //             }
  //           }
  //         },
  //         "reviewsSummary": {
            
  //         },
  //         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         "restaurantOfferPresentationInfo": {
            
  //         },
  //         "externalRatings": {
  //           "aggregatedRating": {
  //             "rating": "--"
  //           }
  //         },
  //         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  //       },
  //       "analytics": {
          
  //       },
  //       "cta": {
  //         "link": "swiggy://menu?restaurant_id=573190&source=collection&query=Pizza",
  //         "text": "RESTAURANT_MENU",
  //         "type": "DEEPLINK"
  //       },
  //       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
  //     },
  //     "relevance": {
  //       "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
  //       "sectionId": "MENU_RETURN_FOOD"
  //     }
  //   }
  // },
  // {
  //   "card": {
  //     "card": {
  //       "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  //       "info": {
  //         "id": "573191",
  //         "name": "Crusto's - Cheese Burst Pizza By Olio",
  //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/72c1a24e-2f26-437d-a3b9-aa153e4f4837_573191.jpg",
  //         "locality": "Varthur Main Road",
  //         "areaName": "Whitefield",
  //         "costForTwo": "₹300 for two",
  //         "cuisines": [
  //           "Pizzas",
  //           "Italian"
  //         ],
  //         "avgRating": 4.4,
  //         "parentId": "268955",
  //         "avgRatingString": "4.4",
  //         "totalRatingsString": "1.3K+",
  //         "sla": {
  //           "deliveryTime": 26,
  //           "lastMileTravel": 2.1,
  //           "serviceability": "SERVICEABLE",
  //           "slaString": "25-30 mins",
  //           "lastMileTravelString": "2.1 km",
  //           "iconType": "ICON_TYPE_EMPTY"
  //         },
  //         "availability": {
  //           "nextCloseTime": "2024-11-30 05:00:00",
  //           "opened": true
  //         },
  //         "badges": {
            
  //         },
  //         "isOpen": true,
  //         "type": "F",
  //         "badgesV2": {
  //           "entityBadges": {
  //             "textBased": {
                
  //             },
  //             "imageBased": {
                
  //             },
  //             "textExtendedBadges": {
                
  //             }
  //           }
  //         },
  //         "aggregatedDiscountInfoV3": {
  //           "header": "₹125 OFF",
  //           "subHeader": "ABOVE ₹249",
  //           "discountTag": "FLAT DEAL",
  //           "logoCtx": {
  //             "text": "BENEFITS"
  //           }
  //         },
  //         "orderabilityCommunication": {
  //           "title": {
              
  //           },
  //           "subTitle": {
              
  //           },
  //           "message": {
              
  //           },
  //           "customIcon": {
              
  //           },
  //           "commsStyling": {
              
  //           }
  //         },
  //         "differentiatedUi": {
  //           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           "differentiatedUiMediaDetails": {
  //             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //             "lottie": {
                
  //             },
  //             "video": {
                
  //             }
  //           }
  //         },
  //         "reviewsSummary": {
            
  //         },
  //         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         "restaurantOfferPresentationInfo": {
            
  //         },
  //         "externalRatings": {
  //           "aggregatedRating": {
  //             "rating": "--"
  //           }
  //         },
  //         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  //       },
  //       "analytics": {
          
  //       },
  //       "cta": {
  //         "link": "swiggy://menu?restaurant_id=573191&source=collection&query=Pizza",
  //         "text": "RESTAURANT_MENU",
  //         "type": "DEEPLINK"
  //       },
  //       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
  //     },
  //     "relevance": {
  //       "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
  //       "sectionId": "MENU_RETURN_FOOD"
  //     }
  //   }
  // },
  // {
  //   "card": {
  //     "card": {
  //       "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  //       "info": {
  //         "id": "10866",
  //         "name": "Pizza Hut",
  //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/a12922f7-3ef7-4df7-921b-ed6e343a234e_10866.jpg",
  //         "locality": "Munnekolalu Village",
  //         "areaName": "Marathahalli",
  //         "costForTwo": "₹350 for two",
  //         "cuisines": [
  //           "Pizzas"
  //         ],
  //         "avgRating": 4.1,
  //         "parentId": "721",
  //         "avgRatingString": "4.1",
  //         "totalRatingsString": "28K+",
  //         "sla": {
  //           "deliveryTime": 27,
  //           "lastMileTravel": 5.5,
  //           "serviceability": "SERVICEABLE",
  //           "slaString": "25-30 mins",
  //           "lastMileTravelString": "5.5 km",
  //           "iconType": "ICON_TYPE_EMPTY"
  //         },
  //         "availability": {
  //           "nextCloseTime": "2024-11-30 05:00:00",
  //           "opened": true
  //         },
  //         "badges": {
            
  //         },
  //         "isOpen": true,
  //         "type": "F",
  //         "badgesV2": {
  //           "entityBadges": {
  //             "textBased": {
                
  //             },
  //             "imageBased": {
                
  //             },
  //             "textExtendedBadges": {
                
  //             }
  //           }
  //         },
  //         "aggregatedDiscountInfoV3": {
  //           "header": "₹125 OFF",
  //           "subHeader": "ABOVE ₹299",
  //           "discountTag": "FLAT DEAL",
  //           "logoCtx": {
  //             "text": "BENEFITS"
  //           }
  //         },
  //         "orderabilityCommunication": {
  //           "title": {
              
  //           },
  //           "subTitle": {
              
  //           },
  //           "message": {
              
  //           },
  //           "customIcon": {
              
  //           },
  //           "commsStyling": {
              
  //           }
  //         },
  //         "differentiatedUi": {
  //           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           "differentiatedUiMediaDetails": {
  //             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //             "lottie": {
                
  //             },
  //             "video": {
                
  //             }
  //           }
  //         },
  //         "reviewsSummary": {
            
  //         },
  //         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         "restaurantOfferPresentationInfo": {
            
  //         },
  //         "externalRatings": {
  //           "aggregatedRating": {
  //             "rating": "--"
  //           }
  //         },
  //         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  //       },
  //       "analytics": {
          
  //       },
  //       "cta": {
  //         "link": "swiggy://menu?restaurant_id=10866&source=collection&query=Pizza",
  //         "text": "RESTAURANT_MENU",
  //         "type": "DEEPLINK"
  //       },
  //       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
  //     },
  //     "relevance": {
  //       "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
  //       "sectionId": "MENU_RETURN_FOOD"
  //     }
  //   }
  // },
  // {
  //   "card": {
  //     "card": {
  //       "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  //       "info": {
  //         "id": "790748",
  //         "name": "Pizza @109",
  //         "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/9/6/d9d51758-2d66-4020-a471-d9286d6f2d2f_fa6ccf7f-2123-482f-b4d9-d867acb82e78.jpeg",
  //         "locality": "K R Puram",
  //         "areaName": "Whitefield",
  //         "costForTwo": "₹200 for two",
  //         "cuisines": [
  //           "Pizzas"
  //         ],
  //         "avgRating": 3.8,
  //         "parentId": "460435",
  //         "avgRatingString": "3.8",
  //         "totalRatingsString": "116",
  //         "sla": {
  //           "deliveryTime": 34,
  //           "lastMileTravel": 5.7,
  //           "serviceability": "SERVICEABLE",
  //           "slaString": "30-35 mins",
  //           "lastMileTravelString": "5.7 km",
  //           "iconType": "ICON_TYPE_EMPTY"
  //         },
  //         "availability": {
  //           "nextCloseTime": "2024-11-30 23:59:00",
  //           "opened": true
  //         },
  //         "badges": {
            
  //         },
  //         "isOpen": true,
  //         "aggregatedDiscountInfoV2": {
            
  //         },
  //         "type": "F",
  //         "badgesV2": {
  //           "entityBadges": {
  //             "textBased": {
                
  //             },
  //             "imageBased": {
                
  //             },
  //             "textExtendedBadges": {
                
  //             }
  //           }
  //         },
  //         "orderabilityCommunication": {
  //           "title": {
              
  //           },
  //           "subTitle": {
              
  //           },
  //           "message": {
              
  //           },
  //           "customIcon": {
              
  //           },
  //           "commsStyling": {
              
  //           }
  //         },
  //         "differentiatedUi": {
  //           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           "differentiatedUiMediaDetails": {
  //             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //             "lottie": {
                
  //             },
  //             "video": {
                
  //             }
  //           }
  //         },
  //         "reviewsSummary": {
            
  //         },
  //         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         "restaurantOfferPresentationInfo": {
            
  //         },
  //         "externalRatings": {
  //           "aggregatedRating": {
  //             "rating": "--"
  //           }
  //         },
  //         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  //       },
  //       "analytics": {
          
  //       },
  //       "cta": {
  //         "link": "swiggy://menu?restaurant_id=790748&source=collection&query=Pizza",
  //         "text": "RESTAURANT_MENU",
  //         "type": "DEEPLINK"
  //       },
  //       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
  //     },
  //     "relevance": {
  //       "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
  //       "sectionId": "MENU_RETURN_FOOD"
  //     }
  //   }
  // },
  // {
  //   "card": {
  //     "card": {
  //       "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  //       "info": {
  //         "id": "790821",
  //         "name": "Pizza @99",
  //         "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/9/6/a45a93e1-8517-4133-a650-511f6e68207a_64a77c17-3313-4147-beea-dc5e8859eee8.jpeg",
  //         "locality": "K R Puram",
  //         "areaName": "Whitefield",
  //         "costForTwo": "₹200 for two",
  //         "cuisines": [
  //           "Pizzas"
  //         ],
  //         "avgRating": 4,
  //         "parentId": "469778",
  //         "avgRatingString": "4.0",
  //         "totalRatingsString": "89",
  //         "sla": {
  //           "deliveryTime": 33,
  //           "lastMileTravel": 5.7,
  //           "serviceability": "SERVICEABLE",
  //           "slaString": "30-35 mins",
  //           "lastMileTravelString": "5.7 km",
  //           "iconType": "ICON_TYPE_EMPTY"
  //         },
  //         "availability": {
  //           "nextCloseTime": "2024-11-30 23:59:00",
  //           "opened": true
  //         },
  //         "badges": {
            
  //         },
  //         "isOpen": true,
  //         "type": "F",
  //         "badgesV2": {
  //           "entityBadges": {
  //             "textBased": {
                
  //             },
  //             "imageBased": {
                
  //             },
  //             "textExtendedBadges": {
                
  //             }
  //           }
  //         },
  //         "aggregatedDiscountInfoV3": {
  //           "logoCtx": {
  //             "text": "BENEFITS"
  //           }
  //         },
  //         "orderabilityCommunication": {
  //           "title": {
              
  //           },
  //           "subTitle": {
              
  //           },
  //           "message": {
              
  //           },
  //           "customIcon": {
              
  //           },
  //           "commsStyling": {
              
  //           }
  //         },
  //         "differentiatedUi": {
  //           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           "differentiatedUiMediaDetails": {
  //             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //             "lottie": {
                
  //             },
  //             "video": {
                
  //             }
  //           }
  //         },
  //         "reviewsSummary": {
            
  //         },
  //         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         "restaurantOfferPresentationInfo": {
            
  //         },
  //         "externalRatings": {
  //           "aggregatedRating": {
  //             "rating": "--"
  //           }
  //         },
  //         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  //       },
  //       "analytics": {
          
  //       },
  //       "cta": {
  //         "link": "swiggy://menu?restaurant_id=790821&source=collection&query=Pizza",
  //         "text": "RESTAURANT_MENU",
  //         "type": "DEEPLINK"
  //       },
  //       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
  //     },
  //     "relevance": {
  //       "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
  //       "sectionId": "MENU_RETURN_FOOD"
  //     }
  //   }
  // },
  // {
  //   "card": {
  //     "card": {
  //       "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  //       "info": {
  //         "id": "805356",
  //         "name": "Ovenstore Pizza",
  //         "cloudinaryImageId": "122939b20a87c849a00614cdbc44fe83",
  //         "locality": "Hallumajra Colony",
  //         "areaName": "Marathahalli",
  //         "costForTwo": "₹199 for two",
  //         "cuisines": [
  //           "American",
  //           "German"
  //         ],
  //         "avgRating": 3.3,
  //         "parentId": "480636",
  //         "avgRatingString": "3.3",
  //         "totalRatingsString": "22",
  //         "sla": {
  //           "deliveryTime": 36,
  //           "lastMileTravel": 7,
  //           "serviceability": "SERVICEABLE",
  //           "slaString": "35-40 mins",
  //           "lastMileTravelString": "7.0 km",
  //           "iconType": "ICON_TYPE_EMPTY"
  //         },
  //         "availability": {
  //           "nextCloseTime": "2024-11-30 17:00:00",
  //           "opened": true
  //         },
  //         "badges": {
            
  //         },
  //         "isOpen": true,
  //         "type": "F",
  //         "badgesV2": {
  //           "entityBadges": {
  //             "imageBased": {
                
  //             },
  //             "textExtendedBadges": {
                
  //             },
  //             "textBased": {
                
  //             }
  //           }
  //         },
  //         "aggregatedDiscountInfoV3": {
  //           "header": "₹50 OFF",
  //           "subHeader": "ABOVE ₹499",
  //           "discountTag": "FLAT DEAL",
  //           "logoCtx": {
  //             "text": "BENEFITS"
  //           }
  //         },
  //         "orderabilityCommunication": {
  //           "title": {
              
  //           },
  //           "subTitle": {
              
  //           },
  //           "message": {
              
  //           },
  //           "customIcon": {
              
  //           },
  //           "commsStyling": {
              
  //           }
  //         },
  //         "differentiatedUi": {
  //           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           "differentiatedUiMediaDetails": {
  //             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //             "lottie": {
                
  //             },
  //             "video": {
                
  //             }
  //           }
  //         },
  //         "reviewsSummary": {
            
  //         },
  //         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         "restaurantOfferPresentationInfo": {
            
  //         },
  //         "externalRatings": {
  //           "aggregatedRating": {
  //             "rating": "--"
  //           }
  //         },
  //         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  //       },
  //       "analytics": {
          
  //       },
  //       "cta": {
  //         "link": "swiggy://menu?restaurant_id=805356&source=collection&query=Pizza",
  //         "text": "RESTAURANT_MENU",
  //         "type": "DEEPLINK"
  //       },
  //       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
  //     },
  //     "relevance": {
  //       "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
  //       "sectionId": "MENU_RETURN_FOOD"
  //     }
  //   }
  // },
  [
    {
      "info": {
        "id": "26304",
        "name": "Subway",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/94d15fed-5a8d-4ad3-90eb-8fbdbf0ccef8_26304.JPG",
        "locality": "Whitefield",
        "areaName": "Whitefield",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "sandwich",
          "Salads",
          "wrap",
          "Healthy Food"
        ],
        "avgRating": 3.9,
        "parentId": "2",
        "avgRatingString": "3.9",
        "totalRatingsString": "8.5K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 1.8,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "1.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-30 05:45:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹119"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.0",
            "ratingCount": "128"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-1841fa33-9156-4ed8-923f-26e753755252"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/subway-whitefield-rest26304",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "1313",
        "name": "Rolls On Wheels - Shawarma & Wraps",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/21/0e257b1a-ab56-43d3-bb18-8c8f5579dadd_1313.jpg",
        "locality": "Whitefield",
        "areaName": "Whitefield",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Rolls & Wraps",
          "North Indian",
          "Fast Food",
          "Italian",
          "Korean",
          "Mexican",
          "Momos",
          "Kebabs"
        ],
        "avgRating": 4.1,
        "parentId": "493982",
        "avgRatingString": "4.1",
        "totalRatingsString": "29K+",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-30 10:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Rolls.png",
              "description": "Delivery!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Rolls.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Rolls.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Rolls.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.4",
            "ratingCount": "78"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-1841fa33-9156-4ed8-923f-26e753755252"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/rolls-on-wheels-shawarma-and-wraps-whitefield-rest1313",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "349072",
        "name": "Baskin Robbins - Ice Cream Desserts",
        "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
        "locality": "Kundanahalli, Brookefield",
        "areaName": "Marathahalli",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Desserts",
          "Ice Cream"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "5588",
        "avgRatingString": "4.6",
        "totalRatingsString": "2.0K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 6.2,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "6.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-30 08:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹160"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-1841fa33-9156-4ed8-923f-26e753755252"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/baskin-robbins-ice-cream-desserts-kundanahalli-brookefield-marathahalli-rest349072",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "23690",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/85a06046-ebc9-4f01-b12b-9323e94308c3_23690.jpg",
        "locality": "ORR Central Mall",
        "areaName": "Bellandur",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "630",
        "avgRatingString": "4.4",
        "totalRatingsString": "66K+",
        "sla": {
          "deliveryTime": 38,
          "lastMileTravel": 11.8,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "11.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-30 06:45:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹549",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-1841fa33-9156-4ed8-923f-26e753755252"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/mcdonalds-orr-central-mall-bellandur-rest23690",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "149682",
        "name": "Samosa Party",
        "cloudinaryImageId": "thzhbierhb2qxhqsl0bo",
        "locality": "Munnekollal",
        "areaName": "Marathahalli",
        "costForTwo": "₹100 for two",
        "cuisines": [
          "Fast Food",
          "Snacks",
          "Beverages",
          "Chaat",
          "North Indian",
          "Street Food",
          "Sweets",
          "Desserts",
          "Punjabi",
          "Bakery"
        ],
        "avgRating": 4.3,
        "parentId": "6364",
        "avgRatingString": "4.3",
        "totalRatingsString": "17K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-07 00:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "select": true,
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-1841fa33-9156-4ed8-923f-26e753755252"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/samosa-party-munnekollal-marathahalli-rest149682",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "763074",
        "name": "Boba Bhai",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/7/1067629b-1f41-48b9-8c1a-8bfed1cc0482_763074.jpg",
        "locality": "WHITEFIELD ROAD",
        "areaName": "SHANTINIKETAN",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bubble Tea",
          "Burger",
          "Korean",
          "Beverages",
          "Fast Food",
          "Juice and shake"
        ],
        "avgRating": 4.3,
        "parentId": "361235",
        "avgRatingString": "4.3",
        "totalRatingsString": "418",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-07 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-1841fa33-9156-4ed8-923f-26e753755252"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/boba-bhai-whitefield-road-shantiniketan-rest763074",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "763077",
        "name": "Seoul Burgers & Shakes",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/7/277673ca-ea27-4e29-bf22-299f06b4b501_763077.jpg",
        "locality": "WHITEFIELD ROAD",
        "areaName": "SHANTINIKETAN",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Burger",
          "Bubble Tea",
          "Fast Food",
          "Beverages",
          "Juice and shake"
        ],
        "avgRating": 4.2,
        "parentId": "372969",
        "avgRatingString": "4.2",
        "totalRatingsString": "328",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-07 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-1841fa33-9156-4ed8-923f-26e753755252"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/seoul-burgers-and-shakes-whitefield-road-shantiniketan-rest763077",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "59067",
        "name": "Samosa Singh",
        "cloudinaryImageId": "77baefd8a5e319c828b4d7dff7260644",
        "locality": "Marathahalli",
        "areaName": "Kadubeesanahalli",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Snacks",
          "North Indian",
          "Beverages"
        ],
        "avgRating": 4,
        "parentId": "5639",
        "avgRatingString": "4.0",
        "totalRatingsString": "9.5K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 5.8,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "5.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-02 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.6",
            "ratingCount": "776"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-1841fa33-9156-4ed8-923f-26e753755252"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/samosa-singh-marathahalli-kadubeesanahalli-rest59067",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "485227",
        "name": "Momo Zone - The Momo Company",
        "cloudinaryImageId": "kixspg0btrlgjvrkr5lf",
        "locality": "Panathur Road",
        "areaName": "Kadubeesanahalli",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Chinese",
          "Tibetan",
          "Fast Food",
          "Momos"
        ],
        "avgRating": 4.2,
        "parentId": "382343",
        "avgRatingString": "4.2",
        "totalRatingsString": "314",
        "sla": {
          "deliveryTime": 48,
          "lastMileTravel": 8.4,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "8.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-30 07:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-1841fa33-9156-4ed8-923f-26e753755252"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/momo-zone-the-momo-company-panathur-road-kadubeesanahalli-rest485227",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "59796",
        "name": "Indiana Burgers",
        "cloudinaryImageId": "zvpkt5mqkeq64rggz1km",
        "locality": "Panathur Road",
        "areaName": "Bellandur Road",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Burgers",
          "American",
          "Fast Food",
          "Beverages",
          "Desserts"
        ],
        "avgRating": 3.8,
        "parentId": "5714",
        "avgRatingString": "3.8",
        "totalRatingsString": "2.5K+",
        "sla": {
          "deliveryTime": 46,
          "lastMileTravel": 8.4,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "8.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-30 07:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-1841fa33-9156-4ed8-923f-26e753755252"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/indiana-burgers-panathur-road-bellandur-road-rest59796",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "46724",
        "name": "WarmOven Cake & Desserts",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/29/c69de0f9-e684-402e-a566-45eaf21c7c7f_46724.JPG",
        "locality": "Panathur Road",
        "areaName": "Kadubeesanahalli",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Ice Cream",
          "Beverages",
          "Cakes"
        ],
        "avgRating": 4.3,
        "parentId": "9696",
        "avgRatingString": "4.3",
        "totalRatingsString": "6.8K+",
        "sla": {
          "deliveryTime": 39,
          "lastMileTravel": 8.4,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "8.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-30 07:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-1841fa33-9156-4ed8-923f-26e753755252"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/warmoven-cake-and-desserts-panathur-road-kadubeesanahalli-rest46724",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "34780",
        "name": "Kaati Zone Rolls & Wraps",
        "cloudinaryImageId": "hvlho5rbsnjaikvnk1lm",
        "locality": "Panathur Road",
        "areaName": "Bellandur Road",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Fast Food",
          "Bengali",
          "Beverages",
          "Desserts",
          "Rolls"
        ],
        "avgRating": 3.8,
        "parentId": "248306",
        "avgRatingString": "3.8",
        "totalRatingsString": "4.1K+",
        "sla": {
          "deliveryTime": 38,
          "lastMileTravel": 8.4,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "8.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-30 07:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-1841fa33-9156-4ed8-923f-26e753755252"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/kaati-zone-rolls-and-wraps-panathur-road-bellandur-road-rest34780",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "295134",
        "name": "McDonald's Gourmet Burger Collection",
        "cloudinaryImageId": "xahrbvgtoz5fhqyjgi9w",
        "locality": "ORR Central Mall",
        "areaName": "Bellandur",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.2,
        "parentId": "10761",
        "avgRatingString": "4.2",
        "totalRatingsString": "2.1K+",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 11.8,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "11.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-30 06:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-1841fa33-9156-4ed8-923f-26e753755252"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/mcdonalds-gourmet-burger-collection-orr-central-mall-bellandur-rest295134",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "192277",
        "name": "McCafe by McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/19/32d3cf6f-264a-496f-87fb-8ebb65d3cacf_192277.jpg",
        "locality": "ORR Central Mall",
        "areaName": "Bellandur",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Beverages",
          "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "8263",
        "avgRatingString": "4.3",
        "totalRatingsString": "64",
        "sla": {
          "deliveryTime": 47,
          "lastMileTravel": 11.8,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "11.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-30 06:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-1841fa33-9156-4ed8-923f-26e753755252"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/mccafe-by-mcdonalds-orr-central-mall-bellandur-rest192277",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "60656",
        "name": "Cupcake Bliss Cake & Desserts",
        "cloudinaryImageId": "40f193d8b23afb2988489dac1258962f",
        "locality": "Panathur Road",
        "areaName": "Kadubeesanahalli",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Ice Cream",
          "Beverages",
          "Cakes"
        ],
        "avgRating": 3.9,
        "parentId": "66732",
        "avgRatingString": "3.9",
        "totalRatingsString": "795",
        "sla": {
          "deliveryTime": 45,
          "lastMileTravel": 8.4,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "8.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-30 07:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-1841fa33-9156-4ed8-923f-26e753755252"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/cupcake-bliss-cake-and-desserts-panathur-road-kadubeesanahalli-rest60656",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "384666",
        "name": "Gourmet Ice Cream Cakes by Baskin Robbins",
        "cloudinaryImageId": "d679c532ca07a6f3fd6d89d603861412",
        "locality": "Kundanahalli",
        "areaName": "Marathahalli",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Ice Cream Cakes",
          "Desserts",
          "Ice Cream",
          "Bakery"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "21932",
        "avgRatingString": "4.5",
        "totalRatingsString": "107",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 6.2,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "6.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-30 08:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹75 OFF",
          "subHeader": "ABOVE ₹499",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-1841fa33-9156-4ed8-923f-26e753755252"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/gourmet-ice-cream-cakes-by-baskin-robbins-kundanahalli-marathahalli-rest384666",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "561287",
        "name": "Baskin Robbins Happyness Shakes",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/12/b4f2af51-f527-44c0-944f-6e2fe33c2ac2_561287.JPG",
        "locality": "Kundanahalli",
        "areaName": "Marathahalli",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Beverages",
          "Desserts"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "322848",
        "avgRatingString": "4.2",
        "totalRatingsString": "16",
        "sla": {
          "deliveryTime": 40,
          "lastMileTravel": 6.2,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "6.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-30 08:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹999",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-1841fa33-9156-4ed8-923f-26e753755252"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/baskin-robbins-happyness-shakes-kundanahalli-marathahalli-rest561287",
        "type": "WEBLINK"
      }
    }
  ]
 

const CardContainer = () => {
  return (
    <div className="card-container">
      {/* <Card resData={dataList[0]}/> */}
    {dataList.map((data, index) => (
      <Card key={index} resData={data} />
    ))}
    </div>
  );
};

const Body = () => {
  return (
    <>
      <CardContainer />
      {/* <CardContainer /> */}
    </>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Body />
    </div>
  );
};

// const heading = React.createElement("h1", {style:{color:"red"}},"Hello from React")

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);

