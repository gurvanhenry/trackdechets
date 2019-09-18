package main

// SiretError When the siret does not have the correct format
type SiretError struct {
	Detail string
}

// APIResponse INSEE API response object
type APIResponse struct {
	Etablissement Etablissement `json:"etablissement"`
}

// APIMultiResponse INSEE API response object
type APIMultiResponse struct {
	Etablissements []Etablissement `json:"etablissement"`
}

// Etablissement Etablissement lié au SIRET
type Etablissement struct {
	Siret              string `json:"siret"`
	Siren              string `json:"siren"`
	NomRaisonSociale   string `json:"nom_raison_sociale"`
	ActivitePrincipale string `json:"activite_principale"`
	GeoAdresse         string `json:"geo_adresse"`
}

// Response La réponse donnée par l'API
type Response struct {
	Siret   string `json:"siret"`
	Siren   string `json:"siren"`
	Name    string `json:"name"`
	Naf     string `json:"naf"`
	Address string `json:"address"`
}
