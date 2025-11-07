# Author and site settings
AUTHOR = "Léonard Seydoux"
SITENAME = "Léonard Seydoux's Website"
SITEURL = "https://leonard-seydoux.github.io"
PATH = "content"

# Basic settings
TIMEZONE = "Europe/Paris"

# Theme and language
THEME = "themes/Flex"
DEFAULT_LANG = "en"

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = ()

# Social widget
SOCIAL = (("GitHub", "https://github.com/leonard-seydoux"),)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True

# Ensure Pelican copies your custom static files
STATIC_PATHS = ["images", "static", "extra", "docs"]

# Add your custom stylesheet to the theme
CUSTOM_CSS = "static/css/custom.css"

# Add custom JavaScript files
CUSTOM_JS = [
    "static/js/content-height.js",
    "static/js/earth-scroll.js",
]

# Use the original GIF for the logo (will be replaced with video by JavaScript)
SITELOGO = "/images/earth.gif"

# Browser tab icon (favicon) - use GIF directly
# FAVICON = "/images/profile.png"
# 'extra/favicon.ico': {'path': 'favicon.ico'}
EXTRA_PATH_METADATA = {
    "extra/favicon.ico": {"path": "favicon.ico"},
}

THEME_COLOR_AUTO_DETECT_BROWSER_PREFERENCE = True
THEME_COLOR_ENABLE_USER_OVERRIDE = False

PYGMENTS_STYLE = "emacs"
PYGMENTS_STYLE_DARK = "paraiso-dark"

# By default Pelican generates an article index at "index.html". To use
# a custom Markdown page as the homepage, exclude 'index' from
# DIRECT_TEMPLATES so Pelican doesn't overwrite `content/pages/index.md`'s
# output. Keep other defaults (tags, categories, archives) available.
DIRECT_TEMPLATES = ("tags", "categories", "archives", "authors")

# Copyright settings used by the theme's footer
from datetime import datetime

# By default use the AUTHOR value for the copyright holder; change if desired
COPYRIGHT_YEAR = datetime.now().year
COPYRIGHT_NAME = AUTHOR

# Page ordering
ARTICLE_ORDER_BY = "attribute"
DISPLAY_PAGES_ON_MENU = True
PAGES_SORT_ATTRIBUTE = "order"
