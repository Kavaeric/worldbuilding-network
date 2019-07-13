---
layout: default
title: Kaztron
category: Kaztron21
---

KazTron is the /r/worldbuilding Discord server's resident helper bot! It mostly helps the moderators manage the community and run features like the World Spotlight, with a few automation features that happen behind the scenes, and a few commands of use to our members.

This website documents the usage of the various commands, organised by module. Note that not all modules may be loaded, depending on needs as judged by the moderation team.

{% include note.html content="Setting up a copy of KazTron is outside the scope of this manual. For any inquiries, you can get in touch with us via [Reddit modmail](https://www.reddit.com/message/compose?to=%2Fr%2Fworldbuilding&subject=KazTron&message=I%27m%20writing%20to%20you%20about%20KazTron.%0D%0D%3CType%20your%20comments%20here%3E) or the #meta channel of our Discord server." %}

{% include important.html content="KazTron is designed for use on one Discord server at a time. It is not possible to invite it to other servers: you would need to host it yourself on a separate bot account." %}

## How to use KazTron commands

KazTron is always monitoring all text channels for commands. The structure of a command is as follows:

```
<prefix><command_name> [arg1 [arg2 [arg3...]]]
```

The prefix, in this case `.`, is how KazTron identifies a command intended for it, versus any normal message. This is followed by the command name, a space, and then any number of arguments separated by spaces (very similarly to command line tools, IRC bots, and IRC NickServ/ChanServ commands). If an argument contains spaces, you should enclose it in quotes to ensure it gets interpreted as a single argument.

{% include note.html content="Some commands are restricted based on user account and text channel&mdash;for example, moderator-only commands or `.roll` only usable in #tabletop." %}

{% include tip.html content="If you see your command message instantly disappear, don't panic&mdash;check your PMs! For *some* commands, this is done to avoid channel spam." %}

### Examples

If you want to be notified about World Spotlight events and updates, you can type this command *in any channel*:

```
.spotlight join
```

If you want to roll dice, say three 20-sided dice, you could type the following message in the #tabletop channel (this is a channel-restricted command):

```
.roll 3d20
```

## Getting Help

In addition to this manual, you can always get contextual help from within Discord. To get a list of commands you can use, type `.help` into any channel on the server. To get help on specific commands, you can type `.help <command>`, or even get help with subcommands using `.help <command> <subcommand>`.

For example, `.help spotlight` will give you general information on the spotlight bot features, whereas `.help spotlight join` will specifically tell you about the "join" subcommand and its syntax. (In this case, the commands are both very simple, though!)

{% include tip.html content="Ask for `.help` in the same channel that you want to use commands in. KazTron only shows commands you're allowed to use based on your account and the channel you ask in." %}

## The Team

This version of KazTron was developed, operated, and contributed to by:

{% include team.html name="Kazandaki" dev=true role="Founder, developer" github="Kazandaki" reddit="Kazandaki" discord="Kazandaki#2637" %}
{% include team.html name="Laogeobunny" dev=true role="Developer" github="Laogeodritt" reddit="Laogeodritt" discord="Laogeobunny#4569" %}
{% include team.html name="cxcfme" dev=true role="Sysadmin" github="cxcfme" %}
{% include team.html name="Teeteegone" role="Kaztron icon artwork" reddit="FrankCrumpets" %}
{% include team.html name="Grine_" role="Quality assurance and testing" github="Grine-sudoscience" %}
{% include team.html name="Yazuki" role="Quality assurance and testing" reddit="Yazuki" %}
{% include team.html name="Kauyon Kais" role="Development" github="KauyonKais" %}
{% include team.html name="Kavaeric" role="Website and docs redesign" github="Kavaeric" reddit="Kavaeric" discord="Kavaeric#0439"%}
