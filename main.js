/* global React, ReactDOM, MaterialUI */
const {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Tabs,
  Tab,
  Container,
  Box,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItemButton,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Switch,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Divider,
  Slide
} = MaterialUI;

const ExpandMoreIcon = MaterialUI.Icons?.ExpandMore || (() => <span>▼</span>);

// ============================
// PREMIUM THEME
// ============================
const theme = createTheme({
  palette: {
    primary: { main: "#1A237E" }, // deep indigo-blue
    secondary: { main: "#FFD700" }, // gold
    background: { default: "#ECEFF1", paper: "#FFFFFF" }
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h4: { fontWeight: 700, marginBottom: "1rem", fontSize: "2.2rem" },
    h6: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
    body1: { fontSize: "1.1rem" }
  },
  shape: { borderRadius: 12 },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          backgroundImage: "none"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          transition: "transform 0.2s ease-in-out",
          "&:hover": { transform: "scale(1.02)" }
        }
      }
    }
  }
});

// ============================
// DATA INTEGRATION
// ============================
const bacteriaData = [

  {
      name: "Enterococcus Faecalis (VS)",
      preferredAntibiotics: [
          { name: "Penicillin G", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin G" },
          { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
          { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
          { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
          { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin" }
      ],
      allAntibiotics: [
          { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G" },
          { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
          { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
          { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
          { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"}, 
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"}, 
          { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"}, 
          { name: "Televancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Televancin"}, 
          { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"}, 
          { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"}, 
          { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
          { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"}, 
          { name: "Nitrofurantoin", class: "Other", detailsPage: "antibiotic.html?name=Nitrofurantoin"},
      ]
  },

  {
      name: "Enterococcus Faecium (VS)",
      preferredAntibiotics: [
          { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 

      ],
      allAntibiotics: [
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
          { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
          { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
          { name: "Nitrofurantoin", class: "Other", detailsPage: "antibiotic.html?name=Nitrofurantoin"},
          { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"}

      ]
  },

  {
      name: "Enterococcus Faecalis (VRE)",
      preferredAntibiotics: [
          { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 

      ],
      allAntibiotics: [
          { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
          { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
          { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
          { name: "Nitrofurantoin", class: "Other", detailsPage: "antibiotic.html?name=Nitrofurantoin"},

      ]
  },

  {
      name: "Enterococcus Faecium (VRE)",
      preferredAntibiotics: [
          { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 

      ],
      allAntibiotics: [
          { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
          { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
          { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
          { name: "Nitrofurantoin", class: "Other", detailsPage: "antibiotic.html?name=Nitrofurantoin"},
          { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"}

      ]
  },

  {
      name: "Staphylococcus Aureus (MSSA)",
      preferredAntibiotics: [
          { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
          { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
          { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
          { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
          { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},
          { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"}
      ],
      allAntibiotics:[
          { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
          { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
          { name: "Fusidic Acid", class: "Other", detailsPage: "antibiotic.html?name=Fusidic Acid"},
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
          { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
          { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
          { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
          { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
          { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"}, 
          { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
          { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
          { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"}, 
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
          { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"}, 
          { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"}, 
          { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"}, 
          { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"}, 
          { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
          { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"}, 
          { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"}, 
          { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"}, 
          { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"}, 
          { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
          { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
          { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
          { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
      ]  

  },

  {
      name: "Staphylococcus Aureus (MRSA)",
      preferredAntibiotics: [
          { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
          { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"}, 
         { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 

      ],
      allAntibiotics:[
          { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
          { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
          { name: "Fusidic Acid", class: "Other", detailsPage: "antibiotic.html?name=Fusidic Acid"},
          { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
         { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
         { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
         { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
         { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
          { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
          { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
          { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"},  
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
      ]
  },

  {
      name: "Staphylococcus Coagulase-negative (MS)",
      preferredAntibiotics: [
          { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
          { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
          { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
          { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
          { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},
          { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"}
      ],
      allAntibiotics:[
          { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
          { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
          { name: "Fusidic Acid", class: "Other", detailsPage: "antibiotic.html?name=Fusidic Acid"},
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
          { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
          { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
          { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
          { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
          { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
          { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
          { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
          { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
          { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"}, 
          { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
          { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
          { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
          { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
          { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
          { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"}, 
          { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"}, 
          { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
          { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"},  
          { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
          { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"},  
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"},  
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
          { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
      ]
  },

  {
      name: "Staphylococcus Coagulase-negative (MR)",
      preferredAntibiotics: [
          { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
          { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
          { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
          { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"} 

      ],
      allAntibiotics:[
          { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
          { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
          { name: "Fusidic Acid", class: "Other", detailsPage: "antibiotic.html?name=Fusidic Acid"},
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
          { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
          { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
          { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"}, 
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
          { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"},  
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},

      ]
  },

  {
      name: "Staphylococcus Epidermidis (MR)",
      preferredAntibiotics: [
          { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
          { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
          { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
          { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"} 
      ],
      allAntibiotics:[
          { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
          { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
          { name: "Fusidic Acid", class: "Other", detailsPage: "antibiotic.html?name=Fusidic Acid"},
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
          { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
          { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
          { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"}, 
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
          { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"},  
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
      ]
  },

  {
      name: "Staphylococcus Epidermidis (MS)",
      preferredAntibiotics: [
          { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
          { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
          { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
          { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
          { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},
          { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"}

      ],
      allAntibiotics:[
          { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
          { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
          { name: "Fusidic Acid", class: "Other", detailsPage: "antibiotic.html?name=Fusidic Acid"},
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
          { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
          { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
          { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
          { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
          { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
          { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
          { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
          { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
          { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"}, 
          { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
          { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
          { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
          { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
          { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
          { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"}, 
          { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
          { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
          { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"},  
          { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
          { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"},  
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"},  
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
          { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
      ]
  },

  {
      name: "Staphylococcus Lugdunensis",
      preferredAntibiotics: [
          { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
          { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
          { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
          { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
          { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},
          { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"}
      ],
      allAntibiotics:[ 
          { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
          { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
          { name: "Fusidic Acid", class: "Other", detailsPage: "antibiotic.html?name=Fusidic Acid"},
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
          { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
          { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
          { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
          { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
          { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
          { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
          { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
          { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"}, 
          { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
          { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
          { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
          { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
          { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
          { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
          { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
          { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
          { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"}, 
          { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
          { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
          { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"},  
          { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
          { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"},  
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"},  
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
          { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
          
      ]
  },

  {
      name: "Staphylococcus Saprophyticus",
      preferredAntibiotics: [
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
          { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
          { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
          { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
          { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}
      ],
      allAntibiotics:[
          { name: "Pivmecillinam", class: "Other", detailsPage: "antibiotic.html?name=Pivmecillinam" },
          { name: "Nitrofurantoin", class: "Other", detailsPage: "antibiotic.html?name=Nitrofurantoin" },
          { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
          { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
          { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
          { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
          { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
          { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
          { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
          { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
          { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
          { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
          { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
          { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"},  
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
          { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
          { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
          { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
          { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
          { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},
      ]
  },

  {
      name: "Streptococcus Anginosus gp",
      preferredAntibiotics: [
          { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
          { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}

      ],
      allAntibiotics:[
          { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
          { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
          { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
          { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
          { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
          { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
          { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
          { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"},  
          { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
          { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
          { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
          { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
          { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
          { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
          { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
          { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
          { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
          { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
          { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
          { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"},  
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
          { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
          { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
          { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
          { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
          { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
          { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
          { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
          { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},

      ]
  },

  {
      name: "Streptococcus Pyogenes (Group A)",
      preferredAntibiotics: [
          { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
          { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}
      ],
      allAntibiotics:[
          { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
          { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
          { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
          { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
          { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
          { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
          { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
          { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
          { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin" },
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"},  
          { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
          { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
          { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
          { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"},  
          { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
          { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
          { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
          { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
          { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
          { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
          { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
          { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
          { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
          { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
          { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
          { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
          { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
          { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
          { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},
      ]
  },

  {
      name: "Streptococcus Agalactiae (Group B)",
      preferredAntibiotics: [
          { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
          { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}
      ],
      allAntibiotics:[
          { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
          { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
          { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
          { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
          { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
          { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
          { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
          { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
          { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin" },
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"},  
          { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
          { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
          { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
          { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"},  
          { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
          { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
          { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
          { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
          { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
          { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
          { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
          { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
          { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
          { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
          { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
          { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
          { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
          { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
          { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},
      ]
  },

  {
      name: "Streptococcus gp C, F, G",
      preferredAntibiotics: [
          { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
          { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}
      ],
      allAntibiotics:[
          { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
          { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
          { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
          { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
          { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
          { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
          { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
          { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin" },
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"},  
          { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
          { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
          { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
          { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
          { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"},  
          { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
          { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
          { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
          { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
          { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
          { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
          { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
          { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
          { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
          { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
          { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
          { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
          { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
          { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
          { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},
      ]
  },

  {
      name: "Streptococcus Pneumoniae",
      preferredAntibiotics: [
          { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
          { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}
      ],
      allAntibiotics:[
          { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
          { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
          { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"},  
          { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
          { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
          { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"},  
          { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
          { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
          { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
          { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
          { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"},  
          { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
          { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
          { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
          { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
          { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
          { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
          { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
          { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
          { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
          { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
          { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
          { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
          { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
          { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
          { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},
      ]
  },

  {
      name: "Virdans Streptococcus",
      preferredAntibiotics: [
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
          { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
          { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"}
      ],
      allAntibiotics:[
          { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
         { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
         { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
         { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
         { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
         { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"},  
          { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
          { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
          { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
          { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
          { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
          { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
          { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
          { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
          { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
          { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
      ]
  },

  {
      name: "Arcanobacter sp.",
      preferredAntibiotics: [
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
          { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"}, 
          { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"}, 
          { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"}, 
          { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
          { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"}, 


      ],
      allAntibiotics:[
          { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
          { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
          { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
          { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
          { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin" },
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"},  
          { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
          { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
          { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
          { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
          { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
          { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"}, 
          { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
          { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
          { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
          { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
          { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
          { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
          { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
          { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}
      ]
  },

  {
      name: "Corynebacterium Diphtheriae",
      preferredAntibiotics: [
          { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"}, 
          { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"}, 
          { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
          { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}
      ],
      allAntibiotics:[
          { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"}, 
          { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
          { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
          { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
      ]
  },

  {
      name: "Corynebacterium Jeikeium",
      preferredAntibiotics: [
          { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"}

      ],
      allAntibiotics:[
          { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
          { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
          { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
          { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin" },
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}

      ]
  },

  {
      name: "Listeria Monocytogenes",
      preferredAntibiotics: [
          { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },

      ],
      allAntibiotics:[
          { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
          { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
          { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
          { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"}

      ]
  },

  {
      name: "Nocardia sp.",
      preferredAntibiotics: [
          { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
          { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
      ],
      allAntibiotics:[
         { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 

      ]
  },

  {
      name: "Aeromonas sp.",
      preferredAntibiotics: [
          //none in sanford guide that have preferred coverage 
      ],
      allAntibiotics:[
          { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
          { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
          { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
          { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
      ]
  },

  {
      name: "Citrobacter Freundii",
      preferredAntibiotics: [
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 

      ],
      allAntibiotics:[
          { name: "Fosfomycin (oral)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (oral)"},
          { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
          { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
          { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
          { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
          { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
      ]
  },

  {
      name: "Citrobacter Koseri",
      preferredAntibiotics: [
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 

      ],
      allAntibiotics:[
          { name: "Pivmecillinam", class: "Other", detailsPage: "antibiotic.html?name=Pivmecillinam"},
          { name: "Fosfomycin (Oral)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (Oral)"},
          { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
          { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
          { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
          { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
          { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"}, 
          { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
          { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
          { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
          { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
          { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
          { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
      ]
  },

  {
      name: "Enterobacter Cloacae",
      preferredAntibiotics: [
          //none in sanford guide that have preferred coverage 
      ],
      allAntibiotics:[
          { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
          { name: "Pivmecillinam", class: "Other", detailsPage: "antibiotic.html?name=Pivmecillinam"},
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
          { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
          { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
          { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
          { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
          { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
      ]
  },

  {
      name: "Escherichia Coli (S)",
      preferredAntibiotics: [
          { name: "Piperacillin-Tazobactam", class: "Penicillins", detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}

      ],
      allAntibiotics:[
          { name: "Pivmecillinam", class: "Other", detailsPage: "antibiotic.html?name=Pivmecillinam"},
          { name: "Fosfomycin (Oral)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (Oral)"},
          { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
          { name: "Nitrofurantoin", class: "Other", detailsPage: "antibiotic.html?name=Nitrofurantoin"},
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
          { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
          { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
          { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
          { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"}, 
          { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
          { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
          { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
          { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
          { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"}, 
          { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
          { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
          { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
      ]
  },

  {
      name: "Escherichia Coli (ESBL)",
      preferredAntibiotics: [
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
      ],
      allAntibiotics:[
          { name: "Pivmecillinam", class: "Other", detailsPage: "antibiotic.html?name=Pivmecillinam"},
          { name: "Fosfomycin (Oral)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (Oral)"},
          { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
          { name: "Plazomicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Plazomicin"},
          { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          
      ]
  },

  {
      name: "Escherichia Coli (KPC)",
      preferredAntibiotics: [
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},

      ],
      allAntibiotics:[
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
          { name: "Plazomicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Plazomicin"},
          { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 

      ]
  },

  {
      name: "Escherichia Coli (MBL)",
      preferredAntibiotics: [],
      allAntibiotics:[
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
          { name: "Plazomicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Plazomicin"},
          { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
          
      ]
  },

  {
      name: "Klebsiella Pneumoniae (S)",
      preferredAntibiotics: [
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 

      ],
      allAntibiotics:[
          { name: "Pivmecillinam", class: "Other", detailsPage: "antibiotic.html?name=Pivmecillinam"},
          { name: "Fosfomycin (Oral)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (Oral)"},
          { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
          { name: "Nitrofurantoin", class: "Other", detailsPage: "antibiotic.html?name=Nitrofurantoin"},
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
          { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
          { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
          { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
          { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"}, 
          { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
          { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
          { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
          { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
          { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"}, 
          { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
          { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
          { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
      ]
  },

  {
      name: "Klebsiella Oxytoca (S)",
      preferredAntibiotics: [
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
      ],
      allAntibiotics:[
          { name: "Fosfomycin (Oral)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (Oral)"},
          { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
          { name: "Nitrofurantoin", class: "Other", detailsPage: "antibiotic.html?name=Nitrofurantoin"},
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
          { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
          { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
          { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
          { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"}, 
          { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
          { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
          { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
          { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
          { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"}, 
          { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
          { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
          { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
      ]
  },

  {
      name: "Klebsiella sp. (ESBL)",
      preferredAntibiotics: [
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 

      ],
      allAntibiotics:[
          { name: "Pivmecillinam", class: "Other", detailsPage: "antibiotic.html?name=Pivmecillinam"},
          { name: "Fosfomycin (Oral)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (Oral)"},
          { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
          { name: "Plazomicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Plazomicin"},
          { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
      ]
  },

  {
      name: "Klebsiella sp. (KPC)",
      preferredAntibiotics: [
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
      ],
      allAntibiotics:[
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
          { name: "Plazomicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Plazomicin"},
          { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
      ]
  },

  {
      name: "Klebsiella sp. (MBL)",
      preferredAntibiotics: [],
      allAntibiotics:[
          { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
          { name: "Plazomicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Plazomicin"},
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
      ]
  },

  {
      name: "Klebsiella Aerogenes",
      preferredAntibiotics: [],
      allAntibiotics:[
          { name: "Pivmecillinam", class: "Other", detailsPage: "antibiotic.html?name=Pivmecillinam"},
          { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
          { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
          { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
          { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
          { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
      ]
  },

  {
      name: "Morganella Morganii",
      preferredAntibiotics: [
          { name: "Piperacillin-Tazobactam", class: "Penicillins", detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 

      ],
      allAntibiotics:[
          { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
          { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
          { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
          { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
          { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
      ]
  },

  {
      name: "Proteus Mirabilis",
      preferredAntibiotics: [],
      allAntibiotics:[
          { name: "Fosfomycin (Oral)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (Oral)"},
          { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
          { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
          { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
          { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
          { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"}, 
          { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
          { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
          { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
          { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
          { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
          { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},
          { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
          { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
          { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
          { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
          { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
          { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
      ]
  },

  {
      name: "Proteus Vulgaris",
      preferredAntibiotics: [],
      allAntibiotics:[
          { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
          { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
          { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
          { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
          { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
          { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
          { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
          { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
      ]
  },

  {
      name: "Providencia sp.",
      preferredAntibiotics: [
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
      ],
      allAntibiotics:[
          { name: "Fosfomycin (Oral)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (Oral)"},
          { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
          { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
          { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
          { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
          { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
          { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
      ]
  },

  {
      name: "Salmonella sp.",
      preferredAntibiotics: [

      ],
      allAntibiotics:[
          { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
          { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
      ]
  },

  {
      name: "Serratia Marcescens",
      preferredAntibiotics: [

      ],
      allAntibiotics:[
          { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
          { name: "Plazomicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Plazomicin"},
          { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
          { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
          { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
          { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
          { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 

      ]
  },

  {
      name: "Shigella sp.",
      preferredAntibiotics: [
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 

      ],
      allAntibiotics:[
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
          { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
          { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
          { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
          { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
          { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"}, 
          { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
          { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
          { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
          { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
      ]
  },

  {
      name: "Yersinia Enterocolitica",
      preferredAntibiotics: [
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 

      ],
      allAntibiotics:[
          { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
          { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
          { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
          { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
          { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
          { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
      ]
  },

  {
      name: "Bartonella sp.",
      preferredAntibiotics: [
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
          { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
          { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
          { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
      ],
      allAntibiotics:[
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"}, 
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
          { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
      ]
  },

  {
      name: "Bordetella Pertussis",
      preferredAntibiotics: [
          { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
          { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"}
      ],
      allAntibiotics:[
          { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
          { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"}
      ]
  },

  {
      name: "Borrelia Burgdoferi",
      preferredAntibiotics: [
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
          { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
          { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
          { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  

      ],
      allAntibiotics:[
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
          { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
          { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
          { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
          { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"}, 
      ]
  },

  {
      name: "Brucella sp.",
      preferredAntibiotics: [],
      allAntibiotics:[
          { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
          { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 

      ]
  },

  {
      name: "Campylobacter Jejuni",
      preferredAntibiotics: [ 
          { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
          { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
      ],
      allAntibiotics:[
          { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
          { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
          { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
          { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
      ]
  },

  {
      name: "Capnocytophaga sp.",
      preferredAntibiotics: [
          { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
      ],
      allAntibiotics:[
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"}, 
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
      ]
  },

  {
      name: "Coxiella Burnetii",
      preferredAntibiotics: [
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  

      ],
      allAntibiotics:[
          { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"}, 
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
          { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
          { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
          { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
      ]
  },

  {
      name: "Ehrlichia, Anaplas",
      preferredAntibiotics: [
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  

      ],
      allAntibiotics:[
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"}, 
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
      ]
  },

  {
      name: "Eikenella sp.",
      preferredAntibiotics: [

      ],
      allAntibiotics:[
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"}, 
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
      ]
  },

  {
      name: "Francisella Tularensis",
      preferredAntibiotics: [
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  

      ],
      allAntibiotics:[
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"}, 
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
          { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},

      ]
  },

  {
      name: "Haemophilus Ducreyi",
      preferredAntibiotics: [
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
          { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
          { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
      ],
      allAntibiotics:[
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
      ]
  },

  {
      name: "Haemophilus Influenzae",
      preferredAntibiotics: [
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 

      ],
      allAntibiotics:[
          { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
          { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
          { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"}, 
          { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
          { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
          { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
          { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
          { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
          { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"},  
          { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
          { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
          { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
          { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
          { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
      ]
  },

  {
      name: "Kingella sp.",
      preferredAntibiotics: [
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 

      ],
      allAntibiotics:[
          { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
          { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"}, 
          { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
          { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
          { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
          { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"},  
          { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
          { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
          { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
          { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
          { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
          { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"},
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
          { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },

      ]
  },

  {
      name: "Klebsiella Granulomatis",
      preferredAntibiotics: [
          { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
          { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 

      ],
      allAntibiotics:[
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
          { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
          { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"}, 
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 


      ]
  },

  {
      name: "Legionella sp.",
      preferredAntibiotics: [
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
          { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
          { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},

      ],
      allAntibiotics:[
          { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
          { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
          { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"}, 
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
      ]
  },

  {
      name: "Leptospira sp.",
      preferredAntibiotics: [
          { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
          { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 

      ],
      allAntibiotics:[
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
          { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
          { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
          { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
      ]
  },

  {
      name: "Moraxella Catarrhalis",
      preferredAntibiotics: [
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },

      ],
      allAntibiotics:[
          { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
          { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
          { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"}, 
          { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
          { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
          { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
          { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
          { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
          { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
          { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"},  
          { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
          { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
          { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
          { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
          { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
      ]
  },

  {
      name: "Neisseria Meningitidis",
      preferredAntibiotics: [
          { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
          { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  

      ],
      allAntibiotics:[
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
          { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
      ]
  },

  {
      name: "Pasturella Multocida",
      preferredAntibiotics: [
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
          { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
          { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
          { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
          { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}
      ],
      allAntibiotics:[
          { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
          { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
          { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
          { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
          { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
          { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
          { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"},  
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
          { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
      ]
  },

  {
      name: "Rickettsia Rickettsii",
      preferredAntibiotics: [],
      allAntibiotics:[
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  

      ]
  },

  {
      name: "Vibrio Cholera",
      preferredAntibiotics: [],
      allAntibiotics:[
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
          { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
          { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 

      ]
  },

  {
      name: "Vibrio Parahemolyticus",
      preferredAntibiotics: [],
      allAntibiotics:[
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
          { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 

      ]
  },

  {
      name: "Vibrio Vulnificus",
      preferredAntibiotics: [],
      allAntibiotics:[
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"}, 
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
      ]
  },

  {
      name: "Yersinia Pestis",
      preferredAntibiotics: [            
          { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
      ],
      allAntibiotics:[
          { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"}, 
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 

      ]
  },

  {
      name: "Acinetobacter Baumannii",
      preferredAntibiotics: [            
          {name: "None"}

      ],
      allAntibiotics:[
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"}, 
          { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},

      ]
  },

  {
      name: "Burkholderia cepacia complex",
      preferredAntibiotics: [],
      allAntibiotics:[
          { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
          { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
      ]
  },
  {
      name: "Pseudomonas Aeruginosa",
      preferredAntibiotics: [
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},

      ],
      allAntibiotics:[
          { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
          { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
          { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
      ]
  },

  {
      name: "Stenotrophomonas Maltophilia",
      preferredAntibiotics: [
          { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},

      ],
      allAntibiotics:[
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
          { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
      ]
  },

  {
      name: "Chlamydia Trachomatis",
      preferredAntibiotics: [
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
          { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
      ],
      allAntibiotics:[
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
          { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"}, 
          { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"}, 
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
          { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
      ]
  },

  {
      name: "Chlamydophila sp.",
      preferredAntibiotics: [
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 

      ],
      allAntibiotics:[
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"}, 
          { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
          { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
          { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"}, 
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
      ]
  },

  {
      name: "Mycoplasma Pneumoniae",
      preferredAntibiotics: [
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  

      ],
      allAntibiotics:[
          { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
          { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
          { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
          { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 

      ]
  },

  {
      name: "Bacteroides Fragilis",
      preferredAntibiotics: [
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Metronidazole", class: "Other", detailsPage: "antibiotic.html?name=Metronidazole"}, 

      ],
      allAntibiotics:[
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 

      ]
  },

  {
      name: "Fusobacterium Necrophorum",
      preferredAntibiotics: [
          { name: "Metronidazole", class: "Other", detailsPage: "antibiotic.html?name=Metronidazole"}, 

      ],
      allAntibiotics:[
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
          { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
      ]
  },

  {
      name: "Prevotella sp.",
      preferredAntibiotics: [
          { name: "Metronidazole", class: "Other", detailsPage: "antibiotic.html?name=Metronidazole"}, 

      ],
      allAntibiotics:[
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
          { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
      ]
  },

  {
      name: "Actinomyces sp.",
      preferredAntibiotics: [
          { name: "Penicillin G", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin G"},
          { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"},
          { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
          { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
          { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"}, 
          { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  

      ],
      allAntibiotics:[
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
          { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
          { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"},
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },

      ]
  },

  {
      name: "Clostridium sp.",
      preferredAntibiotics: [
          { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},

      ],
      allAntibiotics:[
          { name: "Metronidazole", class: "Other", detailsPage: "antibiotic.html?name=Metronidazole"}, 
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
          { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
          { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
          { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
          { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
          { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
          { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
          { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
          { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
          { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"}, 
          { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"}, 
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
          { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
          { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
          { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}

      ]
  },

  {
      name: "Cutibacterium acnes",
      preferredAntibiotics: [
          { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},

      ],
      allAntibiotics:[
         { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
         { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
         { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
         { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
          { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
          { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
          { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin" },
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
          { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
          { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"}, 
          { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"},  
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
          { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
          { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
          { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
          { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
          { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}
      ]
  },

  {
      name: "Peptostreptococci",
      preferredAntibiotics: [
          { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
          { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"},
          { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
          { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
      ],
      allAntibiotics:[
          { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
          { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
         { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
         { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
         { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
         { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
          { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
          { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
          { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin" },
          { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
          { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
          { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
          { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
          { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
          { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
          { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"}, 
          { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
          { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"},  
          { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
          { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
          { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
          { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
          { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
          { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
          { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
          { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
          { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
          { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
          { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
          { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
          { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
          { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
          { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
          { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
          { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
          { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
          { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
          { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
          { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
          { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
          { name: "Delafloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Delafloxacin"}, 
          { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
          { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
          { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
          { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
          { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
          { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
          { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
          { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
          { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
          { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
          { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
      ]
  },
];


// NEW: A separate dosing library for the antibiotics
// Keys are antibiotic names; each value is an object with an indications array.
const dosingLibrary = {
  "Penicillin G": {
    commonRenalAdjustments: [
      { crClRange: "<10 mL/min", adjustment: "Administer a full loading dose, then followed by one-half of the loading dose every 8 to 10 hours" },
    ],
    indications: [
      {
        indication: "Streptococci: Septicemia, Empyema, Pneumonia, Pericarditis ",
        dose: "12 to 24 million units per day in equally divided doses every 4 to 6 hours",
      },
      {
        indication: "Staphylococci: Septicemia, Empyema, Pnuemonia, Pericarditis, Endocarditis, Meningitis",
        dose: "5 to 24 million units per day in equally divided doses every 4 to 6 hours",
      },
      {
        indication: "Anthrax",
        dose: "8 million units per day in divided doses every 6 hours",
      }, 
      {
        indication:"Actinomycosis", 
        dose: "1 to 20 million units per day depending on if it is Cervicofacial disease or Thoracic/Abdominal disease"
      }, 
      {
        indication:"Clostridial infections", 
        dose:"20 million units per day"
      }, 
      {
        indications: "Diptheria", 
        dose: "2 to 3 million units per day in divided doses", 
        duration: "10-12 days"
      }, 
      {
        indication:"Erysipelothrix endocardidtis", 
        dose: "12 to 20 million units per day", 
        duration: "4-6 weeks"
      },
      {
        indication:"Fusospirochetosis", 
        dose: "5 million to 10 million units per day"
      }, 
      {
        indication: "Listeria", 
        dose: "15 to 20 million units per day", 
        duration: "2-4 weeks depending on if it is meningitis or endocarditis"
      }, 
      {
        indication: "Pasturella infections including bacteremia and meningitis", 
        dose: "4 to 6 million units per day", 
        duration: "2 weeks"
      }, 
      {
        indication: "Haverhill fever, Rat-bite fever", 
        dose: "12 to 20 million units per day for 3 to 4 weeks"
      }, 
      {
        indication:"Disseminated gonococal infections", 
        dose: "10 million units per day"
      }, 
      {
        indication:"Syphilis", 
        dose: "12 to 24 million units per day, as 2-4 million units every 4 hours"
      }, 
      {
        indication:"Meningococcal meningitis and/or septicemia", 
        dose:"24 million units per day as 2 million units every 2 hours"
      }
    ]
  },
  // Add additional dosing entries for other antibiotics as needed…
};




// Utility to group bacteria by first letter
function groupBacteria(bacteriaData) {
  const groups = {};
  bacteriaData.forEach(bac => {
    const letter = bac.name.charAt(0).toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(bac);
  });
  return groups;
}
const groupedBacteria = groupBacteria(bacteriaData);

// ============================
// MAIN APP COMPONENT
// ============================
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <CoveragePage />
    </ThemeProvider>
  );
}

// ============================
// NAV BAR
// ============================
function NavBar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Antimicrobial Reference
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

// ============================
// COVERAGE PAGE WITH TABS
// ============================
function CoveragePage() {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Tabs
        value={activeTab}
        onChange={(e, val) => setActiveTab(val)}
        textColor="primary"
        indicatorColor="secondary"
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="Bacteria Guide" />
        <Tab label="Disclaimer" />
        <Tab label="References" />
      </Tabs>
      <Box sx={{ mt: 3 }}>
        {activeTab === 0 && <BacteriaGuideTab />}
        {activeTab === 1 && <DisclaimerTab />}
        {activeTab === 2 && <ReferencesTab />}
      </Box>
    </Container>
  );
}

// ============================
// TAB 1: BACTERIA GUIDE
// ============================
function BacteriaGuideTab() {
  const [selectedBacterium, setSelectedBacterium] = React.useState(null);
  const letters = Object.keys(groupedBacteria).sort();
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Bacterial Organisms
      </Typography>
      {letters.map(letter => (
        <Box key={letter} sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            sx={{
              bgcolor: theme.palette.primary.main,
              color: "#fff",
              px: 2,
              py: 1,
              borderRadius: 1
            }}
          >
            {letter}
          </Typography>
          <Paper sx={{ p: 1, mt: 1 }}>
            <List>
              {groupedBacteria[letter].map(bac => (
                <ListItemButton
                  key={bac.name}
                  onClick={() => setSelectedBacterium(bac)}
                >
                  <ListItemText primary={bac.name} />
                </ListItemButton>
              ))}
            </List>
          </Paper>
        </Box>
      ))}
      {selectedBacterium && (
        <BacteriumDetailsDialog
          bacterium={selectedBacterium}
          onClose={() => setSelectedBacterium(null)}
        />
      )}
    </Box>
  );
}

// ============================
// BACTERIUM DETAILS DIALOG
// ============================
function BacteriumDetailsDialog({ bacterium, onClose }) {
  const [open, setOpen] = React.useState(true);
  const [activeSubTab, setActiveSubTab] = React.useState(0); // 0: Preferred, 1: All
  const [selectedAntibiotic, setSelectedAntibiotic] = React.useState(null);

  return (
    <>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
          onClose();
        }}
        fullWidth
        maxWidth="lg"
        TransitionComponent={Slide}
        TransitionProps={{ direction: "up" }}
      >
        <DialogTitle sx={{ borderBottom: `1px solid ${theme.palette.divider}` }}>
          {bacterium.name}
        </DialogTitle>
        <DialogContent dividers>
          <Tabs
            value={activeSubTab}
            onChange={(e, val) => setActiveSubTab(val)}
            variant="fullWidth"
            textColor="primary"
            indicatorColor="secondary"
          >
            <Tab label="Recommended Agents for Specific Coverage" />
            <Tab label="All Antibiotics with Adequate Coverage" />
          </Tabs>
          <Box sx={{ mt: 2 }}>
            {activeSubTab === 0 && (
              <List>
                {bacterium.preferredAntibiotics &&
                  bacterium.preferredAntibiotics.map((ab, i) => (
                    <ListItemButton key={i} onClick={() => setSelectedAntibiotic(ab)}>
                      <ListItemText primary={ab.name} secondary={ab.class} />
                    </ListItemButton>
                  ))}
              </List>
            )}
            {activeSubTab === 1 && (
              <List>
                {bacterium.allAntibiotics &&
                  bacterium.allAntibiotics.map((ab, i) => (
                    <ListItemButton key={i} onClick={() => setSelectedAntibiotic(ab)}>
                      <ListItemText primary={ab.name} secondary={ab.class} />
                    </ListItemButton>
                  ))}
              </List>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => { setOpen(false); onClose(); }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      {selectedAntibiotic && (
        <AntibioticDetailsDialog
          antibiotic={selectedAntibiotic}
          onClose={() => setSelectedAntibiotic(null)}
        />
      )}
    </>
  );
}

// ============================
// ANTIBIOTIC DETAILS DIALOG WITH DOSING & INDICATIONS AS TABS
// ============================
function AntibioticDetailsDialog({ antibiotic, onClose }) {
  // Retrieve dosing data from the dosingLibrary for the given antibiotic.
  // If not found, use default dosing data.
  const dosingData = dosingLibrary[antibiotic.name] || {
    indications: [
      {
        indication: "Default",
        dose: "No dosing info available",
        duration: "",
        notes: ""
      }
    ],
    commonRenalAdjustments: []
  };

  const indications = dosingData.indications;
  const [selectedIndicationTab, setSelectedIndicationTab] = React.useState(0);
  const currentDosing = indications[selectedIndicationTab];

  // Use renal adjustments from the current indication if provided,
  // otherwise fall back to the commonRenalAdjustments.
  const currentRenalAdjustments =
    currentDosing.renalAdjustments || dosingData.commonRenalAdjustments || [];

  return (
    <Dialog open onClose={onClose} fullWidth maxWidth="lg">
      <DialogTitle>
        Dosing Information for {antibiotic.name}
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Indication & Dosing</Typography>
          <Tabs
            value={selectedIndicationTab}
            onChange={(e, newVal) => setSelectedIndicationTab(newVal)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}
          >
            {indications.map((item, idx) => (
              <Tab key={idx} label={item.indication || "Default"} />
            ))}
          </Tabs>
          <Paper sx={{ p: 2, bgcolor: "#f9f9f9" }}>
            <Typography variant="subtitle1">
              <strong>Dose:</strong> {currentDosing.dose}
            </Typography>
            {currentDosing.duration && (
              <Typography variant="subtitle1">
                <strong>Duration:</strong> {currentDosing.duration}
              </Typography>
            )}
            {currentDosing.notes && (
              <Typography variant="subtitle1">
                <strong>Notes:</strong> {currentDosing.notes}
              </Typography>
            )}
          </Paper>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box>
          <Typography variant="h6">Renal Adjustment</Typography>
          <Paper sx={{ mt: 1 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>CrCl Range</TableCell>
                  <TableCell>Dose Adjustment</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentRenalAdjustments.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell>{row.crClRange}</TableCell>
                    <TableCell>{row.adjustment}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}




// ============================
// TAB 2: DISCLAIMER
// ============================
function DisclaimerTab() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Disclaimer
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        The information provided in this application is for educational purposes only and should not be used as a substitute for professional advice.
      </Typography>
      <Button
        variant="contained"
        onClick={() => window.location.reload()}
      >
        Return to Bacteria Guide
      </Button>
    </Box>
  );
}

// ============================
// TAB 3: References
// ============================
function ReferencesTab() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Disclaimer
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Public references are actively being provided, but are not yet fully available
      </Typography>
      <Button
        variant="contained"
        onClick={() => window.location.reload()}
      >
        Return to Bacteria Guide
      </Button>
    </Box>
  );
}



// ============================
// RENDER THE APP
// ============================
ReactDOM.render(<App />, document.getElementById("root"));
