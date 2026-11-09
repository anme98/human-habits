export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  pillar: string;
  publishedAt: string;
  readingTime: number;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    title: "Kleine Gewohnheiten: So wird der Anfang leichter",
    slug: "kleine-gewohnheiten-anfang",
    excerpt:
      "Eine neue Routine muss nicht groß starten. Wenn der erste Schritt klein genug ist, passt er auch in einen ganz normalen Tag.",
    pillar: "Kleine Schritte",
    publishedAt: "2026-11-06",
    readingTime: 4,
    sections: [
      {
        heading: "Mach den ersten Schritt konkret",
        paragraphs: [
          "„Mehr bewegen“ ist ein guter Wunsch, aber noch keine klare Handlung. „Nach dem Kaffee ziehe ich meine Schuhe an und gehe fünf Minuten vor die Tür“ gibt dir einen sichtbaren Anfang.",
          "Wähle eine Version, die an einem durchschnittlichen Tag machbar ist. Du kannst später mehr daraus machen; fürs Erste zählt, dass du weißt, womit du beginnst.",
        ],
      },
      {
        heading: "Klein heißt nicht bedeutungslos",
        paragraphs: [
          "Eine kurze Wiederholung hilft dir herauszufinden, wann und wo eine Routine in deinen Alltag passt. Sie macht den Einstieg vertrauter, ohne dass du auf einen perfekten Moment warten musst.",
          "Wenn die kleine Version regelmäßig gelingt, kannst du sie behutsam erweitern. Wenn nicht, ist das hilfreiche Information: Vielleicht braucht die Handlung einen besseren Zeitpunkt oder noch weniger Vorbereitung.",
        ],
      },
      {
        heading: "Plane auch für volle Tage",
        paragraphs: [
          "Überlege dir eine besonders einfache Variante für Tage, an denen wenig Zeit oder Energie übrig ist. So bleibt die Verbindung zur Routine bestehen, ohne dass du dich zu mehr drängen musst.",
        ],
      },
    ],
  },
  {
    title: "Gewohnheiten an bestehende Routinen knüpfen",
    slug: "gewohnheiten-an-routinen-knuepfen",
    excerpt:
      "Ein vertrauter Moment kann als Erinnerung für eine neue Handlung dienen. So wird aus einer guten Absicht ein konkreter nächster Schritt.",
    pillar: "Klare Auslöser",
    publishedAt: "2026-10-28",
    readingTime: 5,
    sections: [
      {
        heading: "Nutze einen Moment, der schon da ist",
        paragraphs: [
          "Eine neue Gewohnheit lässt sich leichter erinnern, wenn sie an etwas anknüpft, das du ohnehin regelmäßig tust. Zum Beispiel kannst du nach dem Zähneputzen eine Minute dehnen oder nach dem Mittagessen einen kurzen Spaziergang machen.",
          "Der bestehende Ablauf wird zum Hinweis: Wenn er stattfindet, weißt du, was als Nächstes dran ist.",
        ],
      },
      {
        heading: "Wähle einen verlässlichen Auslöser",
        paragraphs: [
          "Der beste Auslöser ist nicht unbedingt die ideale Uhrzeit, sondern ein Moment, der in deinem wirklichen Alltag häufig vorkommt. Je eindeutiger die Verbindung, desto weniger musst du im Augenblick entscheiden.",
          "Formuliere die Verbindung für dich möglichst konkret: „Nachdem ich …, mache ich …“ So kannst du später leichter erkennen, ob der gewählte Moment funktioniert.",
        ],
      },
      {
        heading: "Passe die Verbindung an",
        paragraphs: [
          "Wenn du den Auslöser oft verpasst, liegt das nicht automatisch an fehlender Disziplin. Vielleicht ist der Ablauf unregelmäßig oder die neue Handlung passt besser an einen anderen Teil des Tages. Ändere den Plan so, dass er zu deinem Alltag passt.",
        ],
      },
    ],
  },
  {
    title: "Die Umgebung so gestalten, dass gute Gewohnheiten leichter werden",
    slug: "umgebung-fuer-gewohnheiten-gestalten",
    excerpt:
      "Kleine Veränderungen in deiner Umgebung können unnötige Hürden senken und hilfreiche Handlungen sichtbarer machen.",
    pillar: "Unterstützende Umgebung",
    publishedAt: "2026-10-15",
    readingTime: 5,
    sections: [
      {
        heading: "Mach den nächsten Schritt sichtbar",
        paragraphs: [
          "Wenn du öfter lesen möchtest, leg ein Buch dort ab, wo du abends ohnehin zur Ruhe kommst. Wenn du morgens spazieren gehen willst, stelle Schuhe und Jacke bereit. Ein sichtbarer Hinweis kann dir helfen, dich im passenden Moment zu erinnern.",
          "Die Idee ist nicht, deinen Alltag perfekt zu organisieren. Suche nach einer kleinen Veränderung, die eine gewünschte Handlung ein Stück leichter auffindbar macht.",
        ],
      },
      {
        heading: "Reduziere eine unnötige Hürde",
        paragraphs: [
          "Überlege, welcher Schritt zwischen deiner Absicht und dem Anfang liegt. Musst du erst etwas suchen, eine App öffnen oder Platz schaffen? Wenn du eine dieser Hürden vorab verringerst, wird der Einstieg einfacher.",
          "Veränderungen müssen nicht dauerhaft oder aufwendig sein. Teste eine Anpassung und beobachte, ob sie dir tatsächlich hilft.",
        ],
      },
      {
        heading: "Gestalte ohne Selbstvorwürfe",
        paragraphs: [
          "Wenn ein Verhalten schwerfällt, kannst du die Bedingungen verändern, statt dich selbst dafür zu verurteilen. Eine hilfreiche Umgebung unterstützt deine Entscheidung, sie nimmt dir aber nicht die Freiheit, deinen Weg jederzeit neu zu wählen.",
        ],
      },
    ],
  },
  {
    title: "Nach einer Unterbrechung wieder in die Routine finden",
    slug: "nach-unterbrechung-zurueckfinden",
    excerpt:
      "Eine Pause macht deinen bisherigen Einsatz nicht zunichte. Mit einem überschaubaren nächsten Schritt kannst du wieder anknüpfen.",
    pillar: "Reflexion",
    publishedAt: "2026-10-02",
    readingTime: 4,
    sections: [
      {
        heading: "Du musst nichts nachholen",
        paragraphs: [
          "Wenn eine Routine unterbrochen wurde, kann der Gedanke ans Aufholen zusätzlichen Druck erzeugen. Du musst eine Pause nicht ausgleichen und keine perfekte Serie herstellen. Du kannst einfach bei der nächsten passenden Gelegenheit wieder beginnen.",
          "Wähle dafür die kleinste Version, die sich heute stimmig anfühlt. Ein ruhiger Wiedereinstieg ist oft hilfreicher als ein besonders ehrgeiziger Plan.",
        ],
      },
      {
        heading: "Schau neugierig auf die Unterbrechung",
        paragraphs: [
          "Vielleicht hat sich dein Zeitplan geändert, vielleicht war die Handlung zu aufwendig oder ein wichtiger Auslöser fehlte. Ein kurzer, wertfreier Blick darauf zeigt dir, welche Anpassung den nächsten Versuch unterstützen könnte.",
          "Nicht jede Pause braucht eine große Analyse. Manchmal war einfach viel los. Nimm daraus nur das mit, was für deinen nächsten Schritt nützlich ist.",
        ],
      },
      {
        heading: "Beginne dort, wo du gerade bist",
        paragraphs: [
          "Deine Routine darf sich mit deinem Leben verändern. Wenn der frühere Plan nicht mehr passt, kannst du einen neuen Zeitpunkt, einen anderen Auslöser oder eine kleinere Handlung wählen.",
        ],
      },
    ],
  },
  {
    title: "Gewohnheiten als Ausdruck deiner Werte verstehen",
    slug: "gewohnheiten-und-werte",
    excerpt:
      "Statt dich nur auf ein fernes Ergebnis zu konzentrieren, kannst du eine kleine Handlung wählen, die heute zu dem Menschen passt, der du sein möchtest.",
    pillar: "Identität",
    publishedAt: "2026-09-18",
    readingTime: 5,
    sections: [
      {
        heading: "Beginne mit einer Richtung",
        paragraphs: [
          "Überlege, welche Eigenschaft du in deinem Alltag öfter leben möchtest: vielleicht Neugier, Fürsorge, Verbundenheit oder Ruhe. Eine Gewohnheit kann eine praktische Möglichkeit sein, dieser Richtung Raum zu geben.",
          "Es geht nicht darum, dich auf ein festes Bild festzulegen. Deine Werte und Prioritäten können sich verändern, und deine Routinen dürfen sich mit ihnen weiterentwickeln.",
        ],
      },
      {
        heading: "Finde eine passende Handlung",
        paragraphs: [
          "Wenn dir Verbundenheit wichtig ist, könnte ein kurzer Anruf eine passende Handlung sein. Wenn du Neugier üben möchtest, nimm dir ein paar Minuten für eine Frage, die dich beschäftigt. Wähle etwas, das sich für dich echt und machbar anfühlt.",
          "Eine kleine Handlung macht eine abstrakte Absicht im Alltag greifbar. Sie muss niemand anderem etwas beweisen.",
        ],
      },
      {
        heading: "Lass jede Wiederholung für sich stehen",
        paragraphs: [
          "Eine verpasste Gelegenheit sagt nicht aus, wer du bist. Du kannst die nächste passende Möglichkeit nutzen und deine Routine so anpassen, dass sie dein Leben unterstützt, statt es zu bewerten.",
        ],
      },
    ],
  },
];

export function getBlogPosts() {
  return [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("de-DE", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}
