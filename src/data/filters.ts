import { FilterType } from '../typings';


const filterCategories:Array<{
  name: string,
  filters: Array<FilterType>
}> = [
  {
    "name": "Produkt",
    "filters": [
      { "name": "Plakat", "children": [] },
      { "name": "screens", "children": [] },
      { "name": "Megaposter", "children": [] },
      { "name": "Speziollösungen", "children": [] },
      { "name": "Innenformate", "children": [] },
      { "name": "Aussenformate", "children": [] },
      { "name": "Mobile", "children": [] },
      { "name": "Promotionsflächen", "children": [] },
      { "name": "Interaktionen", "children": [] }
    ]
  },
  {
    "name": "Werbeart",
    "filters": [
      { "name": "Analog", "children": [] },
      { "name": "Digital", "children": [] }
    ]
  },
  {
    "name": "Format",
    "filters": [
      { "name": "F4", "children": [] },
      { "name": "F200", "children": [] },
      { "name": "F12", "children": [] },
      { "name": "F24", "children": [] },
      { "name": "ePanel", "children": [] },
      { "name": "eBoard", "children": [] },
      { "name": "HC, HCD", "children": [] },
      { "name": "RailPoster", "children": [] },
      { "name": "MegaPoster", "children": [] },
      { "name": "Promotionsflöchen", "children": [] },
      { "name": "Speziallösungen", "children": [] },
      { "name": "Mobiletargeting", "children": [] },
      { "name": "Timeinfo", "children": [] },
      { "name": "Pylon Poster", "children": [] }
    ]
  },
  {
    "name": "Kommunikations",
    "filters": [
      { "name": "Strassen & Plätze", "children": [], "disabled": true },
      { "name": "Bahnhöfe", "children": [], "disabled": true },
      {
        "name": "Flughafen",
        "children": [{ "name": "Item 1" }, { "name": "Item 2" }, { "name": "Item 3" }, { "name": "Item 4" }]
      },
      { "name": "Verkehsmittel", "children": [], "disabled": true },
      { "name": "POI/POS", "children": [], "disabled": true },
      { "name": "Berge", "children": [], "disabled": true }
    ]
  },
  {
    "name": "Laufzeit",
    "filters": [
      { "name": "1 Tag", "children": [] },
      { "name": "7 Tage", "children": [] },
      { "name": "14 Tage", "children": [] },
      { "name": "21 Tage", "children": [] },
      { "name": "1 Montat", "children": [] }
    ]
  },
  {
    "name": "Preis",
    "filters": [
      { "name": "100-199", "children": [] },
      { "name": "200-299", "children": [] },
      { "name": "300-399", "children": [] },
      { "name": "400-499", "children": [] },
      { "name": "500+", "children": [] }
    ]
  }
]

export default filterCategories;