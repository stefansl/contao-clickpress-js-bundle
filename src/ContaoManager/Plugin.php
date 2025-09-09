<?php

namespace StefanSl\ContaoClickpressJsBundle\ContaoManager;

use Contao\CoreBundle\ContaoCoreBundle;
use Contao\ManagerPlugin\Bundle\BundlePluginInterface;
use Contao\ManagerPlugin\Bundle\Config\BundleConfig;
use Contao\ManagerPlugin\Bundle\Parser\ParserInterface;
use StefanSl\ContaoClickpressJsBundle\ContaoClickpressJsBundle;

class Plugin implements BundlePluginInterface
{
    /**
     * {@inheritdoc}
     */
    public function getBundles(ParserInterface $parser)
    {
        return [
            BundleConfig::create(ContaoClickpressJsBundle::class)
                ->setLoadAfter([ContaoCoreBundle::class]),
        ];
    }
}
