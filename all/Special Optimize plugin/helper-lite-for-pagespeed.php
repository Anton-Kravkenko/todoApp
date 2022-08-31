<?php
/**
 * Plugin name: Special Optimize plugin
 * Description: Помогает в оптимизации сайтов, являеться продуктом Антона Кравченка. https://t.me/AntonKravcenco
 * Version: 3.1.4
 * Author: Антон Кравченуко
 * Author URI: https://t.me/AntonKravcenco
 * Text Domain: Special Optimize plugin
 * Domain Path: /languages
 */

namespace Karenina\HelperLightForPageSpeed;

defined('ABSPATH') or exit('No direct script access allowed');

define('HLFP_FILE', __FILE__);
define('HLFP_DIR', __DIR__);
define('HLFP_URL', plugin_dir_url(__FILE__));
define('HLFP_VERSION', '3.1.4');
define('HLFP_TITLE', __('PageSpeed Helper', 'helper-lite-for-pagespeed'));
define('HLFP_SLUG', 'helper-lite-for-pagespeed');

file_exists(HLFP_DIR . '/vendor/autoload.php') or exit('No autoload found for helper-lite-for-pagespeed plugin!');

require_once HLFP_DIR . '/vendor/autoload.php';

$helper_light_for_page_speed = new Main();

if ( is_wp_version_compatible ( '5.5' ) ) {
    //disable lazy-loading in WP 5.5 and higher
    add_filter( 'wp_lazy_loading_enabled', '__return_false' );
}
