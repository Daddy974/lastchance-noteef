// Votre configuration OneSignal
const ONESIGNAL_APP_ID = process.env.ONESIGNAL_APP_ID;
                          
const ONESIGNAL_REST_API_KEY = process.env.ONESIGNAL_API_KEY;
const MY_TEST_SUBSCRIPTION_ID = process.env.MY_TEST_SUBSCRIPTION_ID; // La clé de votre téléphone

async function sendTestPush() {
  const response = await fetch("https://onesignal.com/api/v1/notifications", {
    method: "POST",
    headers: {
      "Authorization": "Basic " + ONESIGNAL_REST_API_KEY,
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({
  app_id: ONESIGNAL_APP_ID,

included_segments: ["All"],
external_user_id: "mon_iphone",
      
      headings: { en: "Test Personnel", fr: "📆 Date limite en approche" },
      contents: { en: "Ceci ne part que vers mon téléphone !", fr: "Veuillez envoyer vos factures avant le 1er du mois prochain (minuit) ⌛️" },
      
      // Optionnel : l'URL à ouvrir au clic
      url: "https://team-concept-compani-ir5b.bolt.host"
    })
  });

  const data = await response.json();
  
  if (data.id) {

    console.log("✅ Succès ! Notification envoyée. ID:", data.id);

  } else {
    console.log("❌ Erreur :", data);
  }
}

sendTestPush();


