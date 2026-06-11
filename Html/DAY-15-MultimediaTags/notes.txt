# HTML Multimedia Tags:
-> Multimedia comes in different formats.  
-> It includes anything that can be seen or heard, such as images, audio, music, videos, animations, films, etc.

# Types of Multimedia:
-> HTML5 introduced 5 most popular media element tags.  
    1. <audio>
    2. <video>
    3. <iframe>

# 1. Audio Tag:
-> The <audio> tag is used to embed(add) sound or music in a web page.
-> It allows users to play, pause, and control audio files directly in the browser.
-> Basic Syntax:
    <audio src="Source/Path" type="audio/mp3"></audio>

-> Example:
    <audio src="/assetslegendary-bach-badinerie-house-background-music-for-video-1-minute-239471.mp3" controls type="mp3"></audio>

-> Supported Audio Formats: .mp3 (most common), .ogg, .wav. etc.

# 2. Video Tag:
-> The <video> tag is used to embed(add) videos in a web page.
-> It allows users to play, pause, control volume, and watch videos directly in the browser.
-> Basic Syntax: 
     <video src="Source/Path" type="video/mp4"></video> 

-> Supported Video Formats: .mp4 (most common), .ogg, .webm, etc

# What is poster Attribute?
-> The poster attribute is used to display an image before the video starts playing.
-> It acts like a thumbnail or preview image for the video.
-> For Example:
    <video controls poster="thumbnail.jpg">
        <source src="video.mp4" type="video/mp4">
    </video>

# Attributes related to multimedia tags:
1. controls => The controls attribute adds a audio, video controls like play, pasue and volume.
2. muted => It is used to mute the audio or video. 
3. autoplay => It is used to start an audio or video file automatically.
4. loop => To play again and again without clicking play.

# <source> Tag:
-> <source> tag is alternative way to provide source for audio and video tag in HTML.
-> Syntax for Audio Tag:
    <audio controls>
        <source src="source/path_for_audio" type="audio/mp3"/>
    </audio>

-> Syntax for Video Tag:
    <video controls>
        <source src="source/path_for_video" type="video/mp4"/>
    </video>

# 3. Iframe Tag:
-> The HTML <iframe> tag defines an inline frame, hence it is also called an inline frame. 
-> The <iframe> tag is used to embed(add) another webpage inside your webpage
-> It acts like a window inside a page.
-> <iframe> is used to embed external content.
-> Common Uses:
    1. Other Websites
    2. YouTube Videos
    3. Google Maps
    4. Our Own webpages
    5. Creating QR Code

-> Basic Syntax: <iframe src="https://example.com"></iframe>

1. Example -> YouTube Video:
<iframe 
    width="560" 
    height="315"
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="YouTube video player"
    allowfullscreen>
</iframe>

2. Example -> Google Maps:
<iframe
    src="https://www.google.com/maps/embed?..."
    width="600" 
    height="450">
</iframe>

3. Example -> QR Code:
-> To create a QR code in HTML, we use a QR Code API.
-> We pass the data (text or URL) in the API link.
-> Then we display it using <iframe> or <img>

# What is QR API?
-> It is an online service that generates QR codes.

# API URL: https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

# How to use:
-> Replace "Example" with your text or website link
-> data=https://www.google.com

# Using Iframe:
-> Example: 
<iframe 
    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.w3schools.com"
    width="300px" 
    height="300px" 
    frameborder="1">
</iframe>

# Using <img>:
-> Example: 
<img 
    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=HelloWorld" 
    alt="QR Code">

# Key Points:
-> QR code is generated using API URL
-> data= → contains your text or link
-> size= → controls QR code size
-> <img> is simpler and recommended
-> <iframe> is also possible but less used
