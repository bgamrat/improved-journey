<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class UtilityController extends AbstractController {

	public function contentObjectDumpAction(Request $request) {
		return $this->render('content_object_dump.html.twig');
	}

}
