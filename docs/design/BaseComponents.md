# NFT Marketplace Base Components for Contributors

## Content
- Card
- Input
    - Text
    - Checkbox
    - Selectbox
- Button
- Accordion
    - Accordion Header


## :sparkles: Card
Card component similar div html element.
#### :grey_exclamation: Props
- width => Card width
- height => Card height
- child => Card content
- blurColor => Card radial blur color (default:rgba(48,118,234,0.2))
- onClick => Card onClick Funtion
#### :zap: Usage

- ##### :tada: Basic
    ```js 
    <Card width='250px' height='250px' /> 
    ```
    <img src="https://github.com/yessGlory17/nft-marketplace/blob/base-components/docs/images/base/card-basic-example.png?raw=true" />

- ##### :tada: Child
    ````js 
    <Card width="250px" height="250px"
       child={
         <div style={{width:"100%", height:"100%",display:"flex",flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
          <Button width='100px' height='50px' color={Colors.buttons.primary} textContent="Primary" />
          <Button width='100px' height='50px' color={Colors.buttons.secondary} textContent="Secondary" />
          <Button width='100px' height='50px' color={Colors.buttons.danger} textContent="Danger"/>
          <Button width='100px' height='50px' color={Colors.buttons.succes} textContent="Succes" />
         </div>
       }
    />
    ````
      

    <img src="https://github.com/yessGlory17/nft-marketplace/blob/base-components/docs/images/base/car-child-example.png?raw=true">

- ##### :tada: Blur Color
    ```js 
          <Card width='250px' height='250px' blurColor="rgba(78, 242, 154,0.3)"/>
    ```
    <img src="https://github.com/yessGlory17/nft-marketplace/blob/base-components/docs/images/base/card-blurColor-example.png?raw=true" />