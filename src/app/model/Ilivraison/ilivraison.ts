export interface Ilivraison {


        telephoneLivraison: number,
        commandes: [
                  {
                        id: number,
                        etatCommande: string,
                        numeroCommande: string,
                        dateCommande: string
                      }
                   ],
          livreur: string
      

}
