# nx-embeds
You can create a widget that can list the games played on the Nintendo Switch and get its HTML embed code.

## Embeds (Mock)
made with Figma.
![Embeds Mock](https://github.com/Kyure-A/nx-embeds/assets/49436968/6d1555f8-2d8a-45ad-b4a8-e03439879636)

## How to use
- `session_token_code` is provided by [this url](https://accounts.nintendo.com/connect/1.0.0/authorize?state=V2Lvv713Pe-_ve-_vWty77-977-9w7Nx77-9X1zvv73vv73Vtu-_ve-_vS0ncwHvv73vv70a77-9P--_vWky&redirect_uri=npf71b963c1b7b6d119://auth&client_id=71b963c1b7b6d119&scope=openid%20user%20user.birthday%20user.mii%20user.screenName&response_type=session_token_code&session_token_code_challenge=De-_ve-_vUTvv73Rge-_vSTvv71k77-9GRrvv73vv73vv71S77-9NO-_vS8u77-9De-_vVzvv71HK2zvv70&session_token_code_challenge_method=S256&theme=login_form).

## Todo
- [x] Generate Auth URL
- [ ] Check the operation of functions that generate tokens
  - [x] `session_token_code`
  - [x] `session_token`
  - [ ] `service_token`
  - [x] `f`
  - [ ] `access_token`
- [ ] Function to treat game list
- [ ] Create embeds with iframe with whyframe
- [ ] Generate embeds with GitHub Actions

## Reference
- [Nintendo Switch Online API - tkgstrator/Salmonia3 Wiki](https://github.com/tkgstrator/Salmonia3/wiki/Nintendo-Switch-Online-API)
- [Nintendo Switch Rest API](https://github.com/ZekeSnider/NintendoSwitchRESTAPI/tree/master)
  - [Nintendo Account API Blueprint](https://github.com/ZekeSnider/NintendoSwitchRESTAPI/blob/master/NintendoAccountBlueprint.md#nintendo-account-api-blueprint)
  - [Nintendo Switch API Blueprint](https://github.com/ZekeSnider/NintendoSwitchRESTAPI/blob/master/SwitchBlueprint.md)
- [f API](https://github.com/imink-app/f-API)
