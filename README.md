# nx-embeds
You can create a widget that can list the games played on the Nintendo Switch and get its HTML embed code.

## Embeds (Mock)
made with Figma.
![Embeds Mock](https://github.com/Kyure-A/nx-embeds/assets/49436968/6d1555f8-2d8a-45ad-b4a8-e03439879636)

## How to use
Execute `auth()`

## Todo
- [x] Generate Auth URL
- [x] Check the operation of functions that generate tokens
  - [x] `session_token_code`
  - [x] `session_token`
  - [x] `service_token`
  - [x] `f`
  - [x] `userinfo`
  - [x] `access_token`
- [ ] Function to treat game list
- [ ] Create embeds with iframe with whyframe
- [ ] Generate embeds with GitHub Actions

## Reference
- [Nintendo Switch Online API - tkgstrator/Salmonia3 Wiki](https://github.com/tkgstrator/Salmonia3/wiki/Nintendo-Switch-Online-API)
- [Nintendo Switch Rest API](https://github.com/ZekeSnider/NintendoSwitchRESTAPI/tree/master)
  - [Nintendo Account API Blueprint](https://github.com/ZekeSnider/NintendoSwitchRESTAPI/blob/master/NintendoAccountBlueprint.md#nintendo-account-api-blueprint)
  - [Nintendo Switch API Blueprint](https://github.com/ZekeSnider/NintendoSwitchRESTAPI/blob/master/SwitchBlueprint.md)
- [f API](https://github.com/imink-app/f-API)
