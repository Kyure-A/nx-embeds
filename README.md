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
- [ ] Create embeds with iframe with whyframe
- [ ] Generate embeds with GitHub Actions

## Reference
- [Nintendo Switch Online API - tkgstrator/Salmonia3 Wiki](https://github.com/tkgstrator/Salmonia3/wiki/Nintendo-Switch-Online-API)
- [Nintendo Switch Rest API](https://github.com/ZekeSnider/NintendoSwitchRESTAPI/tree/master)
  - [Nintendo Account API Blueprint](https://github.com/ZekeSnider/NintendoSwitchRESTAPI/blob/master/NintendoAccountBlueprint.md#nintendo-account-api-blueprint)
  - [Nintendo Switch API Blueprint](https://github.com/ZekeSnider/NintendoSwitchRESTAPI/blob/master/SwitchBlueprint.md)
- [f API](https://github.com/imink-app/f-API)

## Inspired by
[skuralll/steam-embeds](https://github.com/skuralll/steam-embeds)
