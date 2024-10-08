Locales["DA"] = {
    os_lang: "Dansk",
    os_language: "Sprog",
    os_language_selection: "Vælg sproget til systemet.",
    os_cancel: "Annuller",
    os_close: "Luk",
    os_boot: "Starter op...",
    os_shutdown: "Lukning",
    os_shuttingdown: "Lukker ned...",
    os_shutdown_confirmation: "Du er ved at lukke computeren ned, er du sikker?",
    os_shutdown_forced: "Tvungen nedlukning (for langt fra åben position)...",
    os_error: "Fejl",
    os_fake_error: "Ukendt fejl: kan ikke åbne {1}.exe",
    os_session: "Initialiserer en ny session...",
    os_refresh: "Opdater",
    os_create: "Opret",
    os_delete: "Slet",
    os_title: "Titel",
    os_description: "Beskrivelse",

    date_format: "en-US",

    cmd_unknown: "Denne kommando eksisterer ikke.<br>Prøv 'help' for at liste alle tilgængelige kommandoer.",
    cmd_help_desc: "vis alle tilgængelige kommandoer.",
    cmd_version_desc: "vis aktuel version.",
    cmd_clear_desc: "ryd konsoloutput.",
    cmd_exit_desc: "afslut kommandoprompten.",
    cmd_shutdown_desc: "luk computeren ned.",
    cmd_start_desc: "start en applikation.<br>    Brug: start [app]",
    cmd_started: "Applikationen '{1}.exe' er blevet startet.",
    cmd_start_error: "Ukendt applikation '{1}.exe'.",
    cmd_start_not_specified: "Du skal angive en applikation.<br>    Brug: start [app]",
    cmd_start_already: "Applikationen '{1}.exe' kører allerede.",
    cmd_taskkill_desc: "afslut en applikation.<br>    Brug: taskkill [app]",
    cmd_taskkilled: "Applikationen '{1}.exe' er blevet afsluttet.",
    cmd_taskkill_error: "Applikationen '{1}.exe' kører ikke.",
    cmd_taskkill_not_specified: "Du skal angive en applikation.<br>    Brug: taskkill [app]",
    cmd_iptracer_desc: "få information om den angivne IP-adresse.<br>    Brug: ip-tracer [IPv4]",
    cmd_iptracer_not_specified: "Du skal angive en IP-adresse.<br>    Brug: ip-tracer [IPv4]",
    cmd_iptracer_error: "IP-adressen er forkert, den skal se ud som 11.22.33.44.",
    cmd_iptracer_result: `IP-adresse > <span style='color:green'>{1}</span>
    <br>Dato og tid > <span style='color:green'>{2}</span>
    <br>Tidszone > <span style='color:green'>{3}</span>
    <br>Breddegrad > <span style='color:green'>{4}</span>
    <br>Længdegrad > <span style='color:green'>{5}</span>
    <br>Placering > <span style='color:green'>{6}</span>
    <br><span style='color:red'>GPS indstillet.</span>`,
    cmd_iptracer_disconnected: "IP-adressen {1} er <span style='color:red'>frakoblet</span> fra netværket.",
    cmd_netscan_desc: "scan netværket.",
    cmd_connect_desc: "adgang til domæne.<br>    Brug: connect [domæne]",
    cmd_connect_not_specified: "Du skal angive et domænenavn.<br>    Brug: connect [domæne]",
    cmd_connect_unknown: "Ukendt domænenavn.",
    cmd_connect_success: "Forbundet til <span style='color:green'>{1}</span> med succes.",
    cmd_detect_desc: "detekter ip af netværk fra din faktiske position.<br>    Normal brug: detect -ip",
    cmd_detect_arg: "Du skal angive detektionstypen.<br>    Normal brug: detect -ip",
    cmd_detect_none_detected: "Ingen IP opdaget nær din placering.",
    cmd_detect_detected: "Fundet adresse <span style='color:green'>{1}</span> på din placering.",
    cmd_scan_desc: "scan ting på den angivne IP-adresse.<br>    Normal brug: scan -ports [ip]",
    cmd_scan_arg: "Du skal angive, hvad du vil scanne.<br>    Normal brug: scan -ports [ip]",
    cmd_scan_wrong: "Kan ikke scanne porte på den angivne IP-adresse.",
    cmd_scan_good: "Port <span style='color:green'>{1}</span> er åben.",
    cmd_infiltrate_desc: "find og infiltrer en service på en given port og adresse.<br>    Normal brug: infiltrate -ip [ip] -port [åben-port]",
    cmd_infiltrate_arg: "Du skal angive IP og port.<br>    Normal brug: infiltrate -ip [ip] -port [åben-port]",
    cmd_infiltrate_wrong: "Kan ikke finde nogen service at infiltrere på {1}:{2}",
    cmd_infiltrate_good: "Service på {1}:{2} <span style='color:green'>infiltreret</span>.",
    cmd_breach_desc: "brud data af infiltreret service.<br>    Normal brug: breach -ip [ip] -port [åben-port]",
    cmd_breach_arg: "Du skal angive IP og port.<br>    Normal brug: breach -ip [ip] -port [åben-port]",
    cmd_breach_bad: "Kan ikke finde nogen service at bryde på {1}:{2}",
    cmd_breach_no: "Du skal infiltrere servicen, før du bryder den.",
    cmd_breach_good: "Service er blevet brudt, skrivning af data til:<br><span style='color:crimson'>{1}</span>",
    cmd_breach_delay: "Du skal vente, før du laver et brud på denne service.",

    error_market_title: "Fejl ved oprettelse af indlæg",
    error_market_deletion_title: "Sletningsfejl",
    error_market_empty_arg: "Titlen eller beskrivelsen er tom.",
    error_market_arg_overflow: "Titel eller beskrivelse overstiger den tilladte størrelse.",
    error_market_delay: "Vent mellem hvert indlæg.",
    error_market_max: "Du har nået det maksimale antal indlæg.",
    error_market_id: "ID er ugyldig.",
    error_market_id_not_yours: "Denne ID er ikke et af dine indlæg.",
    info_market_creation_success: "Oprettet med succes!",
    info_market_creation_success_desc: "Indlægget er oprettet med succes.\nOpdater markedet.",
    info_market_deletion_success: "Slettet med succes!",
    info_market_deletion_success_desc: "Indlægget er slettet med succes.\nOpdater markedet.",
    market_yours: "dine",
    market_post: "Indlæg",

    info_ipv4: "IPv4:",
    info_type: "Computertype:",
    info_desktop: "Stationær",
    info_laptop: "Bærbar",

    market_description: "Du kan oprette et indlæg hver {1} sekunder, du kan oprette et maksimum af {2} indlæg. Hvert indlæg vil være aktivt i {3} dage.",

    mail_signin: "Log ind",
    mail_signup: "Tilmeld",
    mail_save: "Gem inputs til næste gang.",
    mail_preview: "Din e-mail-adresse vil være {1}.",
    mail_passwords_different: "Adgangskoderne er forskellige.",
    mail_username_taken: "Dette brugernavn er allerede i brug.",
    mail_account_created: "Konto oprettet!",
    mail_empty: "Brugernavn og/eller adgangskode kan ikke være tomme.",
    mail_input_overflow: "Brugernavn eller adgangskode overstiger den tilladte størrelse.",
    mail_password_empty: "Indstil en adgangskode.",
    mail_password_warning: "⚠️ ADVARSEL: Brug ikke en rigtig adgangskode!",
    mail_connect_wrong: "Kontoen eksisterer ikke, eller brugernavnet eller adgangskoden er forkert.",
    mail_signout: "Log ud",
    mail_create: "Ny mail",
    mail_unread: "ULÆST",
    mail_object: "Emne",
    mail_text: "Tekst...",
    mail_send: "Send",
    mail_new: "NY",
    mail_signup_message: "Ingen konto? Tilmeld dig",
    mail_signin_message: "Har allerede en konto? Log ind",
    mail_username: "Brugernavn",
    mail_password: "Adgangskode",
    mail_confirm_password: "Bekræft adgangskode",
    mail_send_error_address: "Den indtastede e-mail-adresse er ugyldig, eksisterer ikke, eller er blevet slettet.",
    mail_send_error_empty: "Mail-objektet eller teksten er tom.",
    mail_send_error_overflow: "Mail-objektet eller teksten overstiger den tilladte størrelse.",
    mail_answer: "Svar",

    addresses_desc: "Brugere bør være forsigtige, når de besøger de listede domæner, og vi er ikke ansvarlige for eventuelle konsekvenser.",
    addr_chatincognitonet_connect_title: "Midlertidigt brugernavn:",
    addr_chatincognitonet_username: "Brugernavn",
    addr_chatincognitonet_connect: "Forbind",
    addr_chatincognitonet_connect_taken: "Brugernavn allerede brugt",
    addr_chatincognitonet_send: "Send",
    addr_chatincognitonet_msg_placeholder: "besked... (255 tegn.)",
    addr_chatincognitonet_left: "forlod chatten.",
    addr_selldata_title: "Sælg data",
    addr_selldata_path: "Sti til data...",
    addr_selldata_sell: "Sælg",
    addr_selldata_bad: "Dataen eksisterer ikke på denne sti, eller der kan ikke fås adgang til stien.",
    addr_selldata_sold: "Dataen solgt for ${1}.",
}
