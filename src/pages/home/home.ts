import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewpagePage } from '../newpage/newpage';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  newpagePage = NewpagePage;
  searchQuery: string = '';
  items: string[];
  allItems: string[];
  includeAltNames: any[];
  parser: any;

  constructor(public navCtrl: NavController, public http: HTTP) {
      this.parser = {
        "data": {
          "diseases": {
            "Any Public Health Hazard": {
              "alt_names": [
                "Any Public Health Hazard",
                "Any unusual case or cluster of cases that may indicate a public health hazard",
                "MERS-CoV",
                "Ebola Virus Disease",
                "Acute Flaccid Myelitis"
              ],
              "urgency_i": 0,
              "phone_number_i": 0,
              "submit_to_lab": 0
            },
            "Bioterrorism Threat or Event": {
              "alt_names": [
                "Bioterrorism Threat or Event",
                "Bioterrorism",
                "Any suspected bioterrorism threat or event"
              ],
              "urgency_i": 0,
              "phone_number_i": 0,
              "submit_to_lab": 0
            },
            "Anthrax": {
              "alt_names": [
                "Anthrax"
              ],
              "urgency_i": 0,
              "phone_number_i": 0,
              "submit_to_lab": 1
            },
            "Botulism": {
              "alt_names": [
                "Botulism",
                "Botulism, foodborne",
                "Botulism, intestinal",
                "Botulism, wound",
                "Botulism, other"
              ],
              "urgency_i": 0,
              "phone_number_i": 0,
              "submit_to_lab": 0
            },
            "Diphtheria": {
              "alt_names": [
                "Diphtheria"
              ],
              "urgency_i": 0,
              "phone_number_i": 3,
              "submit_to_lab": 1
            },
            "Influenza A": {
              "alt_names": [
                "Influenza A",
                "Influenza",
                "Influenza A, variant"
              ],
              "urgency_i": 0,
              "phone_number_i": 3,
              "submit_to_lab": 0
            },
            "Plague": {
              "alt_names": [
                "Plague"
              ],
              "urgency_i": 0,
              "phone_number_i": 0,
              "submit_to_lab": 1
            },
            "Poliomyelitis": {
              "alt_names": [
                "Polliomyelitis",
                "Polio"
              ],
              "urgency_i": 0,
              "phone_number_i": 0,
              "submit_to_lab": 1
            },
            "Smallpox": {
              "alt_names": [
                "Smallpox"
              ],
              "urgency_i": 0,
              "phone_number_i": 0,
              "submit_to_lab": 0
            },
            "Severe Acute Respiratory Syndrome (SARS)": {
              "alt_names": [
                "Severe Acute Respiratory Syndrome (SARS)",
                "SARS",
                "Severe Acute Respiratory Syndrome"
              ],
              "urgency_i": 0,
              "phone_number_i": 0,
              "submit_to_lab": 0
            },
            "Brucellosis (Bioterrorism)": {
              "alt_names": [
                "Brucellosis",
                "Brucellosis bioterrorism",
                "Brucellosis outbreak",
                "Bioterrorism",
                "Outbreak"
              ],
              "urgency_i": 0,
              "phone_number_i": 0,
              "submit_to_lab": 1
            },
            "Q-fever (Bioterrorism)": {
              "alt_names": [
                "Q-fever",
                "Q-fever bioterrorism",
                "Q-fever outbreak",
                "Bioterrorism",
                "Outbreak"
              ],
              "urgency_i": 0,
              "phone_number_i": 0,
              "submit_to_lab": 1
            },
            "Tularemia (Bioterrorism)": {
              "alt_names": [
                "Tularemial",
                "Tularemial bioterrorism",
                "Tularemial outbreak",
                "Bioterrorism",
                "Outbreak"
              ],
              "urgency_i": 0,
              "phone_number_i": 0,
              "submit_to_lab": 1
            },
            "Q-fever": {
              "alt_names": [
                "Q-fever"
              ],
              "urgency_i": 1,
              "phone_number_i": 0,
              "submit_to_lab": 1
            },
            "Tularemia": {
              "alt_names": [
                "Tularemia"
              ],
              "urgency_i": 1,
              "phone_number_i": 0,
              "submit_to_lab": 1
            },
            "Brucellosis": {
              "alt_names": [
                "Brucellosis"
              ],
              "urgency_i": 1,
              "phone_number_i": 0,
              "submit_to_lab": 1
            },
            "Chickenpox (Varicella)": {
              "alt_names": [
                "Chickenpox (Varicella)",
                "Chickenpox",
                "Varicella",
                "Pox"
              ],
              "urgency_i": 1,
              "phone_number_i": 3,
              "submit_to_lab": 0
            },
            "Cholera (Vibrio cholera O1 or O139)": {
              "alt_names": [
                "Cholera (Vibrio cholera O1 or O139)",
                "Cholera",
                "Vibrio cholera",
                "Vibrio cholera O1",
                "Vibrio cholera O139",
                "O1",
                "O139",
                "Cholera O1",
                "Cholera O139"
              ],
              "urgency_i": 1,
              "phone_number_i": 0,
              "submit_to_lab": 1
            },
            "Enteric Escherichia coli infections(O157:H7, STEC, EHEC, EPEC, ETEC)": {
              "alt_names": [
                "Enteric Escherichia coli infections(O157:H7, STEC, EHEC, EPEC, ETEC)",
                "E. Coli",
                "Enteric Escherichia coli",
                "Infections",
                "O157:H7",
                "STEC",
                "EHEC",
                "EPEC",
                "ETEC"
              ],
              "urgency_i": 1,
              "phone_number_i": 6,
              "submit_to_lab": 1
            },
            "Foodborne or waterborne illness": {
              "alt_names": [
                "Foodborne or waterborne illness",
                "Foodborne illness",
                "Waterborne illness",
                "Foodborne",
                "Waterborne"
              ],
              "urgency_i": 1,
              "phone_number_i": 0,
              "submit_to_lab": 0
            },
            "Haemophilus influenza, meningitis and other invasive disease": {
              "alt_names": [
                "Haemophilus influenza",
                "meningitis",
                "invasive disease"
              ],
              "urgency_i": 1,
              "phone_number_i": 0,
              "submit_to_lab": 1
            },
            "Hantavirus pulmonary syndrome": {
              "alt_names": [
                "Hantavirus pulmonary syndrome",
                "Hantavirus",
                "Pulmonary syndrome",
                "Pulmonary"
              ],
              "urgency_i": 1,
              "phone_number_i": 0,
              "submit_to_lab": 0
            },
            "Hemolytic uremic syndrome, post diarrheal": {
              "alt_names": [
                "Hemolytic uremic syndrome",
                "post diarrheal"
              ],
              "urgency_i": 1,
              "phone_number_i": 0,
              "submit_to_lab": 1
            },
            "Hepatitis A": {
              "alt_names": [
                "Hepatitis A",
                "Hep A"
              ],
              "urgency_i": 1,
              "phone_number_i": 1,
              "submit_to_lab": 0
            },
            "Influenza-associated intensive care unit hospitalization": {
              "alt_names": [
                "Influenza-associated intensive care unit hospitalization",
                "Influenza",
                "ICU",
                "Intensive care unit",
                "Intensive care unit hospitalization",
                "Hospitalization",
                "ICU Hospitalization"
              ],
              "urgency_i": 1,
              "phone_number_i": 3,
              "submit_to_lab": 0
            },
            "Measles": {
              "alt_names": [
                "Measles",
                "Rubeola"
              ],
              "urgency_i": 1,
              "phone_number_i": 3,
              "submit_to_lab": 0
            },
            "Mumps": {
              "alt_names": [
                "Mumps",
                "Parotitis"
              ],
              "urgency_i": 1,
              "phone_number_i": 3,
              "submit_to_lab": 0
            },
            "Neisseria meningitidis, meningitis and invasive disease": {
              "alt_names": [
                "Neisseria meningitidis",
                "meningitis",
                "invasive disease"
              ],
              "urgency_i": 1,
              "phone_number_i": 0,
              "submit_to_lab": 0
            },
            "Pertussis (whooping cough)": {
              "alt_names": [
                "Pertussis",
                "Whooping Cough"
              ],
              "urgency_i": 1,
              "phone_number_i": 3,
              "submit_to_lab": 1
            },
            "Rabies": {
              "alt_names": [
                "Rabies",
                "Animal Exposure"
              ],
              "urgency_i": 1,
              "phone_number_i": 0,
              "submit_to_lab": 0
            },
            "Rubella": {
              "alt_names": [
                "Rubella",
                "German Measles",
                "Measles"
              ],
              "urgency_i": 1,
              "phone_number_i": 3,
              "submit_to_lab": 0
            },
            "Smallpox vaccination": {
              "alt_names": [
                "Smallpox",
                "complications of",
                "vaccine",
                "smallpox vaccine",
                "smallpox vaccination"
              ],
              "urgency_i": 1,
              "phone_number_i": 0,
              "submit_to_lab": 0
            },
            "Staphylococcus aureus, Methicillin resistant (MRSA) 2 or more cases in a community setting, or in infants under 61 days of age": {
              "alt_names": [
                "Staphylococcus aureus, Methicillin resistant (MRSA) 2 or more cases in a community setting, or in infants under 61 days of age",
                "Staph",
                "Community setting",
                "MRSA",
                "2 or more cases",
                "Staphylococcus aureus",
                "Staphylococcus aureus, MRSA",
                "infants under 61 days of age",
                "Staphylococcus aureus infants"
              ],
              "urgency_i": 1,
              "phone_number_i": 0,
              "submit_to_lab": 0
            },
            "Staphylococcus aureus, intermediate or high level resistance to vancomycin": {
              "alt_names": [
                "Staphylococcus aureus, intermediate or high level resistance to vancomycin",
                "Staph",
                "Staphylococcus aureus",
                "resistance to vancomycin"
              ],
              "urgency_i": 1,
              "phone_number_i": 0,
              "submit_to_lab": 1
            },
            "Streptococcal infections, Group A, invasive and sequelae": {
              "alt_names": [
                "Streptococcal infections",
                "Streptococcal",
                "Group A",
                "invasive",
                "sequelae"
              ],
              "urgency_i": 1,
              "phone_number_i": 6,
              "submit_to_lab": 0
            },
            "Typhoid Fever": {
              "alt_names": [
                "Typhoid",
                "Typhoid fever",
                "fever"
              ],
              "urgency_i": 1,
              "phone_number_i": 0,
              "submit_to_lab": 1
            },
            "AIDS": {
              "alt_names": [
                "AIDS",
                "HIV"
              ],
              "urgency_i": 2,
              "phone_number_i": 5,
              "submit_to_lab": 0
            },
            "Arboviral Infection": {
              "alt_names": [
                "Arboviral Infection",
                "Dengue fever",
                "California encephalitis",
                "St. Louis encephalitis",
                "West Nile Virus",
                "Chikungunya",
                "Zika Virus"
              ],
              "urgency_i": 2,
              "phone_number_i": 0,
              "submit_to_lab": 1
            },
            "Campylobacter": {
              "alt_names": [
                "Campylobacter",
                "Campylobacteriosis"
              ],
              "urgency_i": 2,
              "phone_number_i": 0,
              "submit_to_lab": 0
            },
            "Chancroid": {
              "alt_names": [
                "Chancroid"
              ],
              "urgency_i": 2,
              "phone_number_i": 2,
              "submit_to_lab": 0
            },
            "Chlamydia (including lymphogranuloma venereum)": {
              "alt_names": [
                "Chlamydia (including lymphogranuloma venereum)",
                "Chlamydia",
                "Lymphogranuloma venereum"
              ],
              "urgency_i": 2,
              "phone_number_i": 2,
              "submit_to_lab": 0
            },
            "Creutzfeldt-Jakob Disease (CJD)": {
              "alt_names": [
                "Creutzfeldt-Jakob Disease",
                "CJD"
              ],
              "urgency_i": 2,
              "phone_number_i": 0,
              "submit_to_lab": 0
            },
            "Cryptosporidiosis": {
              "alt_names": [
                "Cryptosporidiosis"
              ],
              "urgency_i": 2,
              "phone_number_i": 0,
              "submit_to_lab": 0
            },
            "Cyclosporiasis": {
              "alt_names": [
                "Cyclosporiasis"
              ],
              "urgency_i": 2,
              "phone_number_i": 0,
              "submit_to_lab": 0
            },
            "Drug-resistant organism": {
              "alt_names": [
                "drug-resistant organism",
                "drug",
                "drug resistant",
                "resistant organism"
              ],
              "urgency_i": 2,
              "phone_number_i": 7,
              "submit_to_lab": 0
            },
            "Gonorrhea": {
              "alt_names": [
                "Gonorrhea"
              ],
              "urgency_i": 2,
              "phone_number_i": 2,
              "submit_to_lab": 0
            },
            "Hepatitis B, Hepatitis C, and Hepatitis D": {
              "alt_names": [
                "Hepatitis B, Hepatitis C, and Hepatitis D",
                "Hepatitis B",
                "Hep B",
                "Hepatitis C",
                "Hep C",
                "Hepatitis D",
                "Hep D"
              ],
              "urgency_i": 2,
              "phone_number_i": 1,
              "submit_to_lab": 0
            },
            "Histoplasmosis": {
              "alt_names": [
                "Histoplasmosis",
                "Cave disease"
              ],
              "urgency_i": 2,
              "phone_number_i": 0,
              "submit_to_lab": 0
            },
            "HIV infection": {
              "alt_names": [
                "HIV Infection",
                "HIV",
                "AIDS"
              ],
              "urgency_i": 2,
              "phone_number_i": 5,
              "submit_to_lab": 0
            },
            "Influenza deaths in persons less than 18 years of age": {
              "alt_names": [
                "Influenza deaths in persons less than 18 years of age",
                "Influenza"
              ],
              "urgency_i": 2,
              "phone_number_i": 3,
              "submit_to_lab": 0
            },
            "Legionellosis": {
              "alt_names": [
                "Legionellosis",
                "Legionnaire",
                "Legionnaire’s disease"
              ],
              "urgency_i": 2,
              "phone_number_i": 0,
              "submit_to_lab": 1
            },
            "Leprosy (Hansen’s Disease)": {
              "alt_names": [
                "Leprosy (Hansen’s Disease)",
                "Leprosy",
                "Hansen’s Disease"
              ],
              "urgency_i": 2,
              "phone_number_i": 0,
              "submit_to_lab": 1
            },
            "Leptospirosis": {
              "alt_names": [
                "Leptospirosis",
                "Weil’s Disease",
                "Weil"
              ],
              "urgency_i": 2,
              "phone_number_i": 0,
              "submit_to_lab": 1
            },
            "Listeriosis": {
              "alt_names": [
                "Listeriosis"
              ],
              "urgency_i": 2,
              "phone_number_i": 0,
              "submit_to_lab": 1
            },
            "Malaria": {
              "alt_names": [
                "Malaria",
                "Plasmodium infection"
              ],
              "urgency_i": 2,
              "phone_number_i": 0,
              "submit_to_lab": 1
            },
            "Ophthalmia neonatorum (gonococcal)": {
              "alt_names": [
                "Ophthalmia",
                "Ophthalmia neonatorum",
                "gonococcal",
                "Ophthalmia neonatorum (gonococcal)"
              ],
              "urgency_i": 2,
              "phone_number_i": 2,
              "submit_to_lab": 0
            },
            "Psittacosis": {
              "alt_names": [
                "Psittacosis",
                "Ornithosis",
                "Parrot fever"
              ],
              "urgency_i": 2,
              "phone_number_i": 0,
              "submit_to_lab": 0
            },
            "Reye Syndrome": {
              "alt_names": [
                "Reye Syndrome",
                "Reye-Johnson syndrome",
                "Reye",
                "Reye-Johnson"
              ],
              "urgency_i": 2,
              "phone_number_i": 0,
              "submit_to_lab": 0
            },
            "Salmonellosis (other than typhoid)": {
              "alt_names": [
                "Salmonellosis (other than typhoid)",
                "Salmonellosis",
                "Salmonella"
              ],
              "urgency_i": 2,
              "phone_number_i": 0,
              "submit_to_lab": 1
            },
            "Shigellosis": {
              "alt_names": [
                "Shigellosis",
                "Shigella"
              ],
              "urgency_i": 2,
              "phone_number_i": 0,
              "submit_to_lab": 1
            },
            "Streptococcus pneumoniae, invasive disease (< 5 years)": {
              "alt_names": [
                "Streptococcus",
                "pneumoniae",
                "Streptococcus pneumoniae",
                "Invasive disease"
              ],
              "urgency_i": 2,
              "phone_number_i": 3,
              "submit_to_lab": 0
            },
            "Syphilis (including congenital syphilis)": {
              "alt_names": [
                "Syphilis (including congenital syphilis)",
                "Syphilis",
                "Congenital syphilis"
              ],
              "urgency_i": 2,
              "phone_number_i": 0,
              "submit_to_lab": 1
            },
            "Tetanus": {
              "alt_names": [
                "Tetanus",
                "lockjaw"
              ],
              "urgency_i": 2,
              "phone_number_i": 3,
              "submit_to_lab": 0
            },
            "Tickborne Disease": {
              "alt_names": [
                "tickborne disease",
                "tick borne",
                "tick",
                "tickborne",
                "ehrlichiosis",
                "anaplasmosis",
                "babesiosis",
                "Lyme",
                "lyme disease",
                "spotted fever",
                "rickettsioses",
                "spotted fever rickettsioses"
              ],
              "urgency_i": 2,
              "phone_number_i": 0,
              "submit_to_lab": 0
            },
            "Toxic shock syndrome due to staphylococcus aureus infection": {
              "alt_names": [
                "Toxic Shock syndrome",
                "toxic shock",
                "staphylococcus",
                "staphylococcus aureus infection",
                "staphylococcus aureus"
              ],
              "urgency_i": 2,
              "phone_number_i": 0,
              "submit_to_lab": 0
            },
            "Trichinosis": {
              "alt_names": [
                "Trichinosis"
              ],
              "urgency_i": 2,
              "phone_number_i": 0,
              "submit_to_lab": 0
            },
            "Tuberculosis": {
              "alt_names": [
                "Tuberculosis",
                "TB",
                "consumption"
              ],
              "urgency_i": 2,
              "phone_number_i": 4,
              "submit_to_lab": 1
            },
            "Vibriosis (Non-cholera Vibrio infections)": {
              "alt_names": [
                "Vibriosis (Non-cholera Vibrio infections)",
                "Vibriosis",
                "non-cholera vibrio",
                "vibrio"
              ],
              "urgency_i": 2,
              "phone_number_i": 0,
              "submit_to_lab": 1
            },
            "Yersiniosis": {
              "alt_names": [
                "Yersiniosis"
              ],
              "urgency_i": 2,
              "phone_number_i": 0,
              "submit_to_lab": 0
            }
          },
          "phone_numbers": [
            "Communicable Disease Surveillance: (312) 746-5925 or (312) 746-5377",
            "Communicable Disease Hepatitis Surveillance: (312) 746-6197",
            "Sexually Transmitted Infection (STI) Surveillance: (312) 747-0697 \nSexually Transmitted Infection Surveillance Fax: (312) 745-7627",
            "Vaccine Preventable Disease Surveillance: (312) 746-5911/5901",
            "Tuberculosis Surveillance: (312) 746-6013; Fax (312) 746-5134",
            "HIV/AIDS Surveillance: (312) 747-9614",
            "N/A",
            "Communicable Disease Surveillance: (312) 746-5925 or (312) 746-5377 \nSexually Transmitted Infection (STI) Surveillance: (312) 747-0697 \nSexually Transmitted Infection Surveillance Fax: (312) 745-7627"
          ],
          "urgency_levels": [
            "Immediate (within 3 hours by phone)",
            "24-Hours",
            "7 days"
          ]
        }
      };
    this.allItems = Object.keys(this.parser["data"]["diseases"]);
    this.includeAltNames = [];
    for (var i=0; i<this.allItems.length; i++){
      var disease = [];
      for (var j=0; j<this.parser["data"]["diseases"][this.allItems[i]]["alt_names"].length; j++){
        disease.push(this.parser["data"]["diseases"][this.allItems[i]]["alt_names"][j]);
      }
      this.includeAltNames.push(disease);
    }
    this.items = this.allItems.sort();
    //puts public health hazard on top
    this.items.splice(this.items.indexOf("Any Public Health Hazard"), 1);
    this.items.unshift("Any Public Health Hazard");

  }


  getItems(ev: any) {
    // Reset items back to all of the items
    this.items = this.allItems;

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) == 0);
      })
      this.items = this.items.sort();
    }
  }


  GotoNewPage(item) {
    this.navCtrl.push(NewpagePage, {
      disease: item,
      data: this.parser
    });
  }



}
