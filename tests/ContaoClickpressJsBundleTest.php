<?php

/*
 * This file is part of [package name].
 *
 * (c) John Doe
 *
 * @license LGPL-3.0-or-later
 */

namespace StefanSl\ContaoClickpressJsBundle\Tests;

use StefanSl\ContaoClickpressJsBundle\ContaoClickpressJsBundle;
use PHPUnit\Framework\TestCase;

class ContaoClickpressJsBundleTest extends TestCase
{
    public function testCanBeInstantiated()
    {
        $bundle = new ContaoClickpressJsBundle();

        $this->assertInstanceOf('StefanSl\ContaoClickpressJsBundle\ContaoClickpressJsBundle', $bundle);
    }
}
