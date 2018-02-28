<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <title>Test Test </title>
    <link rel="shortcut icon" href="images/fav-icon.png">

    <link rel="stylesheet" href="css/settings.css" type="text/css" media="all">

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&amp;subset=latin,latin-ext" type="text/css" media="all">
    <link rel="stylesheet" href="css/bootstrap.css" type="text/css" media="all">
    <link rel="stylesheet" href="css/owl.carousel.min.css" type="text/css" media="all">
    <link rel="stylesheet" href="css/font-awesome.css" type="text/css" media="all">
    <link rel="stylesheet" href="css/animate.min.css" type="text/css" media="all">
    <link rel="stylesheet" href="css/flaticon.css" type="text/css" media="all">
    <link rel="stylesheet" href="css/easyzoom.min.css" type="text/css" media="all">
    <link rel="stylesheet" href="css/aos.css" type="text/css" media="all">
    <link rel="stylesheet" href="css/modal-compare.css" type="text/css" media="all">
    <link rel="stylesheet" href="css/style.css" type="text/css" media="all">
    <link rel="stylesheet" href="css/banner-style.css" type="text/css" media="all">
    <link rel="stylesheet" href="css/custom-css.css" type="text/css" media="all">
    <link rel="stylesheet" href="css/color.css" type="text/css" media="all">
    <link rel="stylesheet" href="css/responsive.css" type="text/css" media="all">


    <link href="http://fonts.googleapis.com/css?family=Open+Sans%3A400" rel="stylesheet" property="stylesheet" type="text/css" media="all">
    <link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro%3A400%2C600" rel="stylesheet" property="stylesheet" type="text/css" media="all">
</head>

<body>

    <div id="box-mobile-menu" class="box-mobile-menu full-height">
        <div class="box-inner">
            <a href="#" class="close-menu"><span class="icon fa fa-times"></span></a>
        </div>
    </div>


    <?php include ('header.php')?>

    <div class="wapper">
        <div class="header-bg page-heading gray-bg article-bk-image">
            <div class="overlay"></div>
            <div class="heading-content text-center">
                <div class="container">
                    <h1 class="page-title shop-page-title color-white">Account</h1>
                    <nav class="woocommerce-breadcrumb"><a href="index.html">Home</a>account</nav>
                </div>
            </div>
        </div>
        <div class="main-container shop-page no-sidebar">
            <div class="container">
                <div id="container">
                    <div id="content" role="main">
                        <div class="row">
                            <div class="main-content col-sm-12">

                                <div class="row navaccount">
                                    <div class="col-xs-12 col-sm-12 col-md-3 col-md-3">
                                        <!-- required for floating -->
                                        <!-- Nav tabs -->
                                        <ul class="nav nav-tabs tabs-left">
                                            <li class="active"><a href="#home" data-toggle="tab">Dashboard</a></li>
                                            <li><a href="#orders" data-toggle="tab">Orders</a></li>
                                            <li><a href="#favourite" data-toggle="tab">Favourite Shop</a></li>
                                            <li><a href="#settings" data-toggle="tab">Settings</a></li>
                                            <li><a data-toggle="tab">LogOut</a></li>
                                        </ul>
                                    </div>

                                    <div class="col-xs-12 col-sm-12 col-md-9 col-md-9">
                                        <!-- Tab panes -->
                                        <div class="tab-content">

                                            <div class="tab-pane active" id="home">

                                                <p>Hello admin <a href="#">Member</a></p>
                                                <p>From your account dashboard you can view your recent orders, manage your shipping and billing addresses and edit your password and account details.</p>

                                            </div>

                                            <div class="tab-pane" id="orders">

                                                <p>My Orders</p>

                                                <div class="table-content table-responsive form-div-border-none">
                                                    <table class="shop_table cart table-responsive">
                                                        <thead>
                                                            <tr>
                                                                <th colspan="2" class="product-name">Product</th>
                                                                <th>Price</th>
                                                                <th class="product-quantity">Quantity</th>
                                                                <th class="product-subtotal">Total</th>
                                                                <th class="product-remove">&nbsp;</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr class="cart_item">
                                                                <td class="product-thumbnail">
                                                                    <a href="#"><img width="180" height="233" src="images/1-270x349.png" alt="img"></a>
                                                                </td>
                                                                <td class="product-name" data-title="Product">
                                                                    <a href="#">Apple iPad mini 2-32 GB</a>
                                                                </td>
                                                                <td class="product-price" data-title="Price">
                                                                    <span>$150.00</span>
                                                                </td>
                                                                <td class="product-quantity" data-title="Quantity">
                                                                    <div class="quantity">
                                                                        <div class="control">
                                                                            <a class="btn-number  qtyminus quantity-minus" href="#">-</a>
                                                                            <input type="text" data-step="1" data-min="0" data-max="" value="1" title="Qty" class="input-qty qty" size="4">
                                                                            <a class="btn-number  qtyplus quantity-plus" href="#">+</a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="product-subtotal" data-title="Total">
                                                                    <span>$150.00</span>
                                                                </td>
                                                                <td class="product-remove">
                                                                    <a href="#" class="remove" title="Remove this item">×</a>
                                                                </td>
                                                            </tr>
                                                            <!-- end lines of items -->
                                                            <tr class="cart-footer">
                                                                <td colspan="3">

                                                                </td>
                                                                <td colspan="3" class="actions text-right">
                                                                    <input type="submit" class="button border small" value="Update Cart">
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>

                                            <div class="tab-pane" id="favourite">

                                                <p>Favourite Shop</p>


                                                <div class="table-content table-responsive form-div-border-none">
                                                    <table class="shop_table cart table-responsive">
                                                        <thead>
                                                            <tr>
                                                                <th colspan="2" class="product-name">Product</th>
                                                                <th>Price</th>
                                                                <th class="product-quantity">Link</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr class="cart_item">
                                                                <td class="product-thumbnail">
                                                                    <a href="#"><img width="180" height="233" src="images/1-270x349.png" alt="img"></a>
                                                                </td>
                                                                <td class="product-name" data-title="Product">
                                                                    <a href="#">Apple iPad mini 2-32 GB</a>
                                                                </td>
                                                                <td class="product-price" data-title="Price">
                                                                    <span>$150.00</span>
                                                                </td>
                                                                <td class="">
                                                                    <a href="#">Open product</a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>


                                            </div>

                                            <div class="tab-pane" id="settings">

                                                <p>Settings Account</p>


                                                <form method="post" class="login">
                                                    <p>
                                                        <label for="username">Username or email address <span class="required">*</span></label>
                                                        <input type="text" class="input-text" name="username" id="username" value="">
                                                    </p>
                                                    <p class="">
                                                        <label for="password">Password <span class="required">*</span></label>
                                                        <input class="input-text" type="password" name="password" id="password">
                                                    </p>
                                                    <p>
                                                        <input type="submit" class="btn-login button" name="Settings " value="Settings ">
                                                    </p>
                                                </form>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Wrapper -->

    <?php include ('footer.php')?>

    <a href="#" class="scroll_top" title="Scroll to Top"><i class="flaticon-up-arrow"></i></a>

    <script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
    <script type="text/javascript" src="js/jquery-migrate.min.js"></script>
    <script type="text/javascript" src="js/jquery.themepunch.tools.min.js"></script>
    <script type="text/javascript" src="js/jquery.themepunch.revolution.min.js"></script>
    <script type="text/javascript" src="js/revolution.extension.video.min.js"></script>
    <script type="text/javascript" src="js/revolution.extension.slideanims.min.js"></script>
    <script type="text/javascript" src="js/revolution.extension.actions.min.js"></script>
    <script type="text/javascript" src="js/revolution.extension.layeranimation.min.js"></script>
    <script type="text/javascript" src="js/revolution.extension.kenburn.min.js"></script>
    <script type="text/javascript" src="js/revolution.extension.navigation.min.js"></script>
    <script type="text/javascript" src="js/revolution.extension.migration.min.js"></script>
    <script type="text/javascript" src="js/revolution.extension.parallax.min.js"></script>

    <!-- Bootstrap's core  javasrcipt -->
    <script type='text/javascript' src='js/bootstrap.min.js'></script>

    <!-- Action on scroll library -->
    <script type='text/javascript' src='js/aos.js'></script>

    <!-- Sticky header  -->
    <script type='text/javascript' src='js/jquery.sticky.min.js'></script>

    <!-- Owl carousel for iamge sliders -->
    <script type='text/javascript' src='js/owl.carousel.min.js'></script>

    <!-- HTML5/CSS3 fall back support  -->
    <script type='text/javascript' src='js/modernizr.min.js'></script>

    <!-- Zoom images and gallery in product page -->
    <script type='text/javascript' src='js/jquery.elevateZoom-3.0.8.min.js'></script>
    <script type='text/javascript' src='js/jquery.magnific-popup.min.js'></script>

    <!-- Jquery UI Slider range -->
    <script type='text/javascript' src='js/jquery-ui-1.11.1.min.js'></script>

    <!-- General functions of the theme -->
    <script type='text/javascript' src='js/functions.js'></script>

    <script type="text/javascript">
        AOS.init({
            startEvent: 'load',
            easing: 'ease-in-sine',
            delay: 200,
            offset: 100,
            duration: 500
        });
        //Init global AOS values

    </script>
</body>

</html>
