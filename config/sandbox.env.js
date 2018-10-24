module.exports = {
  NODE_ENV: '"sandbox"',

  // WARNING: this will make 'non IP failover website' use the 'IP failover API' !
  BASE_ADDRESS_SIRENE_FULLTEXT: '"https://sandbox.entreprise.data.gouv.fr/api/sirene/v1/full_text/"',
  BASE_ADDRESS_SIRENE_SIRET: '"https://sandbox.entreprise.data.gouv.fr/api/sirene/v1/siret/"',
  BASE_ADDRESS_SIRENE_SIREN: '"https://sandbox.entreprise.data.gouv.fr/api/sirene/v2/siren/"',
  BASE_ADDRESS_SIRENE_SUGGESTIONS: '"https://sandbox.entreprise.data.gouv.fr/api/sirene/v1/suggest/"',
  BASE_ADDRESS_SIRENE_NEAR_ETABLISSEMENT: '"https://sandbox.entreprise.data.gouv.fr/api/sirene/v1/near_etablissement_geojson/"',
  BASE_ADDRESS_SIRENE_ID_ASSOCIATION: '"https://sandbox.entreprise.data.gouv.fr/api/sirene/v1/rna/"',

  BASE_ADDRESS_RNA_FULLTEXT: '"https://sandbox.entreprise.data.gouv.fr/api/rna/v1/full_text/"',
  BASE_ADDRESS_RNA_SIRET: '"https://sandbox.entreprise.data.gouv.fr/api/rna/v1/siret/"',
  BASE_ADDRESS_RNA_ID_ASSOCIATION: '"https://sandbox.entreprise.data.gouv.fr/api/rna/v1/id/"',

  BASE_ADDRESS_RNCS: '"https://sandbox2.sirene.entreprise.api.gouv.fr/rncs/api/infos_identite_entreprise_rncs/"',
  BASE_ADDRESS_RNM: '"https://api-rnm.artisanat.fr/api/entreprise/"'
}
