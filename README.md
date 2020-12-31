# Instagram Profile Card

![Instagram Profile Card Meta Data Instacard](https://raw.githubusercontent.com/realabbas/instagram-user-meta-data/master/demo/instacard.png)

## Installation Guide

```
git clone "https://github.com/realabbas/instagram-user-meta-data.git"
cd instacard
npm install
node index.js "your-username"
```

### Usage

*Instagram Username is Required*

Run the following command

``` node index.js realabbas5 ```

#### Output

![Instagram User Meta Data Output](./demo/output.png)

**DATA is returned as JSON Object**

```
Profile Showing for realabbas5
{
  name: 'Ali Rizvi',
  username: '@realabbas5',
  description: '&quot; Try being so small that everybody loves to sit with you and so big that nobody sits when you stand &quot;\n' +
    'Tech Lover and Enthusiast\n' +
    'Serious Developer���',
  image: 'https://instagram.fknu1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/130936940_1290094604691569_5602805999393245553_n.jpg?_nc_ht=instagram.fknu1-1.fna.fbcdn.net&_nc_ohc=WCVw2CW82IEAX9k89ak&tp=1&oh=ff099a87f96f96a4700f7a2cf660f508&oe=6016294D'
}
```