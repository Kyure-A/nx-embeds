# nx-embeds
You can create a widget that can list the games played on the Nintendo Switch and get its HTML embed code.

## Embeds
![Widget Image](https://github.com/Kyure-A/nx-embeds/assets/49436968/16bca238-5b09-42f8-8001-50412abb5879)

## How to use
When you execute the function `auth()`, you will obtain the `session_token`. Please add this token to your GitHub Actions Secrets.

## Todo
- [x] Generate Auth URL
- [x] Check the operation of functions that generate tokens
  - [x] `session_token_code`
  - [x] `session_token`
  - [x] `service_token`
  - [x] `f`
  - [x] `userinfo`
  - [x] `access_token`
- [x] Function to treat game list
- [x] Create Widget
- [ ] Create embeds js
- [ ] Generate embeds with GitHub Actions

## Notes
- This app uses an **unofficial** API obtained by reverse engineering the My Nintendo App. Please note that the API may change and stop working without notice!

- The link to each game's eshop in the widget is redirected at fancy.org.uk/api/nxapi/title/. So far I haven't had any problems and don't expect any problems, but please keep in mind that maybe the link will be changed to a malicious link.

## Reference
- [Intro to Nintendo Switch REST API](https://dev.to/mathewthe2/intro-to-nintendo-switch-rest-api-2cm7)
- [Nintendo Switch Rest API](https://github.com/ZekeSnider/NintendoSwitchRESTAPI/tree/master)
  - [Nintendo Account API Blueprint](https://github.com/ZekeSnider/NintendoSwitchRESTAPI/blob/master/NintendoAccountBlueprint.md#nintendo-account-api-blueprint)
  - [Nintendo Switch API Blueprint](https://github.com/ZekeSnider/NintendoSwitchRESTAPI/blob/master/SwitchBlueprint.md)
  - [My Nintendo App API Blueprint (written by me)](https://github.com/Kyure-A/NintendoSwitchRESTAPI/blob/master/MyNintendo.md)
- [f API](https://github.com/imink-app/f-API)

## Inspired by
[skuralll/steam-embeds](https://github.com/skuralll/steam-embeds)
