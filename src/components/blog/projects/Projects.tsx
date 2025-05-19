import { ProjectCard } from "@/components/blog/projects/ProjectCard";
import { Tag } from "@/types/global";

export function Project() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
      <ProjectCard
        key="DUE"
        title="DUE"
        tags={[Tag.FRONT]}
        techTag={["Vue.js", "Typescript", "RDF lib", "Keycloak JS"]}
        link="https://app.ruedelaconvention.fr/due"
      >
        Application permettant de créer sa propre DUE (décision unilatérale de
        l’employeur), accompagnée par l’IA de Khresterion. Le site nécessite une
        connexion, mais il est bien accessible au public.
      </ProjectCard>
      <ProjectCard
        key="Gestionnaire de paiement"
        title="Gestionnaire de paiement"
        tags={[Tag.BACK]}
        techTag={["Java", "Spring boot", "Stripe API", "Mailjet API", "SQL"]}
      >
        Permet de traiter les paiements des clients et de gérer leur facturation
        périodique avec l’API Stripe. Le système inclut également la gestion des
        codes promo ainsi que l’envoi des documents via Mailjet.
      </ProjectCard>
      <ProjectCard
        key="Latex doc"
        title="Latex doc"
        tags={[Tag.BACK]}
        techTag={["Python", "Flask", "Lua", "Latex"]}
      >
        Le générateur de documents juridiques. Les inférences de notre moteur de
        raisonnement sont récupérées ici pour produire des textes respectant les
        normes réglementaires.
      </ProjectCard>
      <ProjectCard
        key="Rugby trainer"
        title="Rugby trainer"
        tags={[Tag.FRONT]}
        techTag={["Vue.js", "Typescript", "Capacitor", "Bootstrap"]}
      >
        Une Progressive Web App pour apprendre les règles du rugby aux enfants.
        L’application contient des quiz pour évaluer leurs connaissances et leur
        donne des conseils pour devenir joueurs professionnels.
      </ProjectCard>
      <ProjectCard
        key="OpsScript"
        title="OpsScript"
        tags={[Tag.DEVOPS]}
        techTag={[
          "Ansible",
          "Jenkins",
          "Nginx",
          "Bash script",
          "HashiCorp Vault",
        ]}
      >
        Projet pour la définition des pipelines Jenkins et l’automatisation des
        déploiements d’applications. Permet également de configurer les serveurs
        ainsi que de gérer les routes vers nos applications.
      </ProjectCard>
    </div>
  );
}
