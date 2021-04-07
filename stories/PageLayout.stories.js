import PageLayout from '@/layouts/PageLayout';

export default {
    title: 'Pages/Page/PageContent',
    component: PageLayout
};


const Template = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {PageLayout},
    template: '<page-layout v-bind="$props" />',
});


export const Default = Template.bind({});
Default.args = {
    page: {
        "id": 8,
        "slug": "index",
        "excerpt": {
            "rendered": "<p>Value System&nbsp;Our value system is the foundation on which our relationships are built and our business operated. We are honest We are friendly and fun We are a team Our customers are part of our team We listen We know where to get solutions We have a sense of urgency We seek feedback for continuous [&hellip;]</p>\n",
            "protected": false
        },
        "date": "2021-03-22T19:19:41",
        "tags": "__vue_devtool_undefined__",
        "content": {
            "rendered": "\n<p><strong>Value System</strong>&nbsp;Our value system is the foundation on which our relationships are built and our business operated.</p>\n\n\n\n<ul><li>We are honest</li><li>We are friendly and fun</li><li>We are a team</li><li>Our customers are part of our team</li><li>We listen</li><li>We know where to get solutions</li><li>We have a sense of urgency</li><li>We seek feedback for continuous improvement</li></ul>\n\n\n\n<p><strong>Wisconsin Networks Background&nbsp;</strong>Wisconsin Networks is the newest division of Graphic Center Inc. in Fond du Lac, WI. Graphic Center is a quality design, print, and sign company. We have been blazing the trail for a high level of quality and service for the past 15 years. Graphic Center currently employs 10 enthusiastic team members. Wisconsin Networks was created to lead our customers to the next level of digital communications.</p>\n\n\n\n<p><strong>Our Team</strong>&nbsp;Our team has a strong background in communications, programming, marketing, and Web Site design. We understand the importance of a professional image in presenting and promoting your products and services to your current and future customers. We also know that it is important for your customers to be able to find the information they need quickly. Every viewer of your Web Site is a potential customer &#8211; we want to help capture this contact. We want to make your Web Site successful. One of our goals is to work efficiently (without sacrificing quality) both for your benefit and ours. The team that will be assigned to create and maintain your Web Site is:</p>\n\n\n\n<ul><li><strong>Jules Dintino:</strong>&nbsp;web designer</li><li><strong>Gordon Lugauer:</strong>&nbsp;system administrator</li><li><strong>David Hornung:</strong>&nbsp;graphic design artist</li><li><strong>Rick Kolstad:</strong>&nbsp;team leader</li></ul>\n\n\n\n<p><strong>Outstanding Service</strong>&nbsp;Outstanding Service Our team understands that the best way to keep customers is to keep them happy. You will find our high quality and outstanding service does just that. We can provide most modifications to your Web Site within 48 hours. More involved programming, scripting, and animation may take longer. We have been known to make exceptions in emergency cases. Please visit some of our present Web Sites linked from our portfolio page on wisnet.com to see the quality of our work.</p>\n\n\n\n<p><strong>The Technical Stuff</strong>&nbsp;If you are technically impaired you may want to stop reading here. Our Web Sites are located on our Gateway G6-180MHz Pentium Pro system which currently has 64 MB of Ram, and 7 GB of storage space. This machine is running a LINIX operating system with Apache Web Server. We are connected to the Net by a 10Mhz Ethernet port that is located on the FIDDI ring just off the Mae-East Internet Hub in Washington DC. What does this mean? Your Web Site will be available for fast access from anywhere in the world!</p>\n",
            "protected": false
        },
        "featured_img_url": "http://api-wisnet96.dev/wp-content/uploads/2021/03/about-header-img.gif",
        "callout": "<p>Our Mission is to provide our customers with Internet marketing services and solutions with a team that is committed to quality, honesty and outstanding customer satisfaction.</p>\n"
    },
    title: "about wisconsin networks"

};





