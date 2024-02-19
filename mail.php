<!DOCTYPE html>
<!-- Coding By CodingNepal - youtube.com/codingnepal -->
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Subscription Form | CodingNepal</title>
  <link rel="stylesheet" href="style.css">
  <script src="https://kit.fontawesome.com/a076d05399.js"></script>
</head>

<body>
  <input type="checkbox" id="toggle">
  <a src="index.html" class="show-btn">BACK TO HOME</a>
  <form action="index.html" class="form">

    <button class="show-btn"><span>BACK TO HOME</span></button>
  </form>
  <div class="wrapper">
    <label for="toggle">
      <img src="assets/images/icon/close.png" style="width: 4%;
    margin-left: 300px;
"> </i>
    </label>
    <div class="content">
      <img src="assets/images/icon/cropped-cropped-Genesisvirtue-Full (3).png" style="width: 150px;">
      <header>Become a Subscriber</header>
      <p>Subscribe to our Services and makek.</p>
    </div>
    <form action="mail.php" method="POST">
      <?php
      $userEmail = ""; //first we leave email field blank
      if (isset($_POST['subscribe'])) { //if subscribe btn clicked
        $userEmail = $_POST['email']; //getting user entered email
        if (filter_var($userEmail, FILTER_VALIDATE_EMAIL)) { //validating user email
          $subject = "Thanks for Subscribing us - GenesisVirtue";
          $message = "Thanks for subscribing to our blog. You'll always receive updates from us. And we won't share and sell your information.";
          $sender = "From: shreyasdamgude@gmail.com";
          //php function to send mail
          if (mail($userEmail, $subject, $message, $sender)) {
      ?>
            <!-- show sucess message once email send successfully -->
            <div class="alert success-alert">
              <?php echo "Thanks for Subscribing us." ?>
            </div>
          <?php
            $userEmail = "";
          } else {
          ?>
            <!-- show error message if somehow mail can't be sent -->
            <div class="alert error-alert">
              <?php echo "Failed while sending your mail!" ?>
            </div>
          <?php
          }
        } else {
          ?>
          <!-- show error message if user entered email is not valid -->
          <div class="alert error-alert">
            <?php echo "$userEmail is not a valid email address!" ?>
          </div>
      <?php
        }
      }
      ?>
      <div class="field">
        <input type="text" class="email" name="email" placeholder="Email Address" required value="<?php echo $userEmail ?>">
      </div>
      <div class="field btn">
        <div class="layer"></div>
        <button type="submit" name="subscribe">Subscribe</button>
      </div>
    </form>
    <div class="text">We do not share your information.</div>
  </div>

</body>
</html>